import fs from 'node:fs/promises'
import express from 'express'
import * as cheerio from 'cheerio';
// Constants
//const isProduction = process.env.NODE_ENV === 'production'
const isProduction = false;
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined

// Create http server
const app = express()

// Add Vite or respective production middlewares
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')

    const build = "./build/dev/javascript/site"
    const serverFile = "/server-test.jsx"
    const fullPath = `${build}${serverFile}`
    let template
    let render
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./public/index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      const {renderComponent} = await vite.ssrLoadModule(fullPath)
      render = await renderComponent
    } else {
      template = templateHtml
      const {renderComponent} = await import('./dist/server/server-test.js')
      render = renderComponent
    }

    const { pathname } = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
    const tempDoc = cheerio.load(template);

    let componentPlaceholder =  tempDoc("[data-component]")
    let props = componentPlaceholder.data();
    const rendered = await render(pathname, props)

    const $ = cheerio.load(rendered.html);

    //const compName = $(["data-hydration-component"]);
    componentPlaceholder.replaceWith(rendered.html)

    const html = tempDoc.html()
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})