import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>head page title</title>
        <meta name="description" content="description of Head page" />
      </Head>
      <Component {...pageProps} />
    </>
  )
};

export default App;
