import Head from "next/head";
import Layout from "../components/user/partials/Layout";
import AdminLayout from "../components/admin/partials/AdminLayout"; // Import AdminLayout
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../styles/css/style.css"; // Impor CSS Vanilla
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Cek jika path termasuk di dalam admin
  const isAdminRoute = router.pathname.startsWith("/admin");

  return (
    <>
      <Head>
        <link rel="icon" href="../public/img/logo/logo (2).png" />
        <title>CVXpress</title>
      </Head>
      {isAdminRoute ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
