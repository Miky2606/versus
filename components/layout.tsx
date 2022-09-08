import NavBar from "./navbar";
import { ReactNode, FunctionComponent, useState, useEffect } from "react";
import { NextApiRequest } from "next";
import { getUserApi } from "../controller/sign-login";

interface BaseLayoutProps {
  children?: ReactNode;
  token: string;
}

interface Request {
  req: NextRequest;
}

const Layout: FunctionComponent<BaseLayoutProps> = ({ children, token }) => {
  const [user, setUser] = useState<string>("");

  const { API_URL } = process.env;
  const api = API_URL + "/hello";

  useEffect(() => {
    getUserApi(token, api)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <p>{user}</p>
      <main>{children}</main>
    </>
  );
};

function getServerSideProps(req: NextApiRequest) {
  console.log(req.headers.cookie);
}

export default Layout;
