import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../styles/css/style.css"; // Impor CSS Vanilla
// _app.js or _document.js

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="../public/img/logo/logo (2).png" /> {/* Path ke favicon */}
        <title>CVXpress</title> {/* Tambahkan title jika perlu */}
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
