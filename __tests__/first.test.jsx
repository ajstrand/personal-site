import { h } from 'preact'
import { render, fireEvent, screen } from '@testing-library/preact'
import { MDXProvider } from '@mdx-js/preact'
import { HelmetProvider, Helmet } from 'react-helmet-async'

import { DefaultLayout } from '../src/layouts/DefaultLayout'

describe('render some html', () => {
  test('should render html like we expect', async () => {
    const helmetContext = {}
    const meta = {}
    const tableOfContents = []
    let data = {
      meta: {
        title: 'Welcome to Tropical',
        description: "The world's newest Tropical website!"
      },
      tableOfContents: [
        {
          depth: 1,
          value: 'Welcome to your new Tropical website 🏝😎🍹',
          id: 'welcome-to-your-new-tropical-website-',
          children: [Array]
        }
      ],
      filePath: '/index',
      modulePath: './pages/index.mdx',
      urlPath: '/'
    }
    const html = (
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Hello World</title>
        </Helmet>
        <DefaultLayout meta={meta} tableOfContents={tableOfContents} pages={data}>
          <p>this is a test</p>
          {/* <MDXStuff /> */}
        </DefaultLayout>
      </HelmetProvider>
    )
    render(html)
  })
  test('should render the layout', () => {
    const text = 'this is HTML'
    const helmetContext = {}
    const meta = {}
    const tableOfContents = []
    const App = () => <p>{text}</p>
    const html = (
      <MDXProvider components={{}}>
        <DefaultLayout meta={meta} tableOfContents={tableOfContents}>
          <App />
        </DefaultLayout>
      </MDXProvider>
    )
    render(html)

    const x = screen.getByText(text)

    expect(x).toBeInTheDocument()
  })
})
