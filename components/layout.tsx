import NavBar from "./navbar";
import { getCookie } from "cookies-next";
import { ReactNode, FunctionComponent, useEffect } from "react";



interface BaseLayoutProps {
  children?: ReactNode,
  token:string
}

const Layout: FunctionComponent<BaseLayoutProps> = ({ children, token }) => {
   
 

  return (
    <>
    <h1>{token}</h1>
      <NavBar />

      <main>{children}</main>
    </>
  );
};

export default Layout;

