import type { AppContext, AppProps } from "next/app";
import Layout from "../components/layout";
import "bootswatch/dist/morph/bootstrap.min.css";
import "../styles/image.scss";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
