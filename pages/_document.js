import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/prism.css" />
        </Head>
        <body id="body" class="light">
          <button class="themeer" onclick="dark()" data-dark>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '25px', padding: '5px' }} fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          <button class="themeer" onclick="light()" data-light>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '25px', padding: '5px' }} fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <Main />
          <div className="overlay">
            <div className="bg" />
          </div>
          <script src="/prism.js" />
          <script src="/theme.js" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument