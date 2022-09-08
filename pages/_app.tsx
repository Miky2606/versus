import type { AppContext, AppProps } from "next/app";
import Layout from "../components/layout";
import "bootswatch/dist/morph/bootstrap.min.css";
import "../styles/image.scss";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import App from "next/app";
import { ResponseApi } from "./api/interface/response";
type TProps = Pick<AppProps, "Component" | "pageProps"> & {
  token: string;
};

function MyApp({ Component, pageProps, token }: TProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout token={token}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
  const pageProps = App.getInitialProps(appContext);
  const { req } = appContext.ctx;
  const cookies = req?.headers.cookie?.split("=")[1];

  return {
    token: cookies,
    ...pageProps,
  };
};
