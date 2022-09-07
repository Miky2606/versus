import NavBar from "./navbar";
import { ReactNode, FunctionComponent } from "react";
import { AppContext } from "next/app";



interface BaseLayoutProps {
  children?: ReactNode,
  token:any
}


const Layout: FunctionComponent<BaseLayoutProps> = ({ children, token }) => {

 

  return (
    <>
  
      <NavBar />
      <h1>{token}</h1>
   
      <main>{children}</main>
    </>
  );
};

export default Layout;




