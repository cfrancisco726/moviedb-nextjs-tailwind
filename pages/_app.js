import "../styles/globals.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Oswald:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
