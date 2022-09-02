import type { AppContext, AppProps } from "next/app";
import Layout from "../components/layout";
import "bootswatch/dist/morph/bootstrap.min.css";
import "../styles/image.scss";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { useEffect } from "react";
import { NextPageContext } from "next";
import App from "next/app";
import { ResponseApi } from "./api/interface/response";

interface BaseMyApp {
  req: NextRequest;
}

function MyApp({ Component, pageProps}: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout token>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
  const pageProps = App.getInitialProps(appContext);
  const { req } = appContext.ctx;
  const cookies = req?.headers.cookie?.split("=")[1];

  const { API_URL } = process.env;
  const token = await axios.get<ResponseApi>(API_URL + "/hello", {
    headers: {
      token: cookies as string,
    },
  });

  return {
    ...pageProps,
    token: token.data.msg,
  };
};
