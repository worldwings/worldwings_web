import "../styles/globals.scss";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

import { ToastContainer } from "react-toastify";
import Layout from "@/components/layout/layout";
import { FONTS } from "@/styles/fonts";
import LoadingScreen from "@/components/ui/loading_screen/loading_screen";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // ----------- AOS ----------------------
    Aos.init({
      duration: 1000,
      once: false,
    });

    // ----------- Progress ----------------------

    Router.events.on("routeChangeStart", (...params) => {
      NProgress.start(params);
    });
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);
    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>World Wings | Home</title>
      </Head>

      <main className={FONTS.font2}>
        {isHome && loading && <LoadingScreen />}
        <Layout>
          <SpeedInsights />
          <Component {...pageProps} />
          <ToastContainer position="bottom-right" />
        </Layout>

      </main>
      <Analytics />
    </>
  );
}
