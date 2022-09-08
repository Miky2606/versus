import NavBar from "./navbar";
import { ReactNode, FunctionComponent } from "react";

interface BaseLayoutProps {
  children?: ReactNode;
  token: string;
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
