import "../styles/globals.css";
import Header from "../components/Header";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
