import { renderToString } from 'solid-js/web'
import App from './App'

/**
 * @param {string} _url
 */
export function render(_url) {
  const app = renderToString(() => <App />)

  // const Shell = () => (

  // <html lang="en">
  //   <head>
  //     <title>🔥 Solid SSR 🔥</title>
  //     <meta charset="UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <link rel="stylesheet" href="/styles.css" />
  //     <HydrationScript/>
  //   </head>
  //   <body>
  //     <div id="root">
  //     <App/>

  //     </div>
  //     <script type="module" src="/src/entry-client.jsx" />
  //   </body>
  // </html>
  // )
  // let page = renderToString(() => <Shell/>)
  // page = `<!DOCTYPE html>${page}`
  console.log(app)
  return { app, type:"text/html", status:200 }
}
