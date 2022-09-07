import type { AppContext, AppProps } from "next/app";
import Layout from "../components/layout";
import "bootswatch/dist/morph/bootstrap.min.css";
import "../styles/image.scss";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { Component, useEffect } from "react";
import type { NextComponentType } from "next";
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
    <Layout token={token} >
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
          
  if (req?.headers.cookie !== undefined){

  const token = await axios.get<ResponseApi>(API_URL + "/hello", {
    headers: {
      token: cookies as string,
    },
  });


  console.log(token.data.msg)


  return {
    token: token.data.msg,
    ...pageProps,
 
  };
}
return {
  token: '',
  ...pageProps,

};
};
