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
          <link rel="stylesheet" href="https://blog.jacobhq.xyz/prism.css"/>
        </Head>
        <body>
          <Main />
          <script src="https://blog.jacobhq.xyz/prism.js" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument