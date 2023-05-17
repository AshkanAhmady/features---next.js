import Head from "next/head";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>head page title</title>
        <meta name="description" content="description of Head page" />
      </Head>
      <Component {...pageProps} />
      <Script src="https://example.com/script.js" strategy="afterInteractive" />
    </>
  )
};

export default App;
