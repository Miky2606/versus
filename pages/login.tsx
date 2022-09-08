import { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCookie, setCookies } from "cookies-next";
import { ResponseApi } from "./api/interface/response";
import axios from "axios";
import user, { User } from "./api/interface/userDB";

const Login: NextPage = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [response, setResponse] = useState<ResponseApi>();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => e.preventDefault();
  const handleUser = (e: any) => setUser(e.target.value);
  const handleEmail = (e: any) => setEmail(e.target.value);
  const handlePassword = (e: any) => setPassword(e.target.value);

  const { API_URL } = process.env;
  const userSend = () => {
    const userData: User = {
      username: user,
      email: email,
      password: password,
      vs: [],
      verfified: false,
      os: window.navigator.platform,
    };

    axios.post<ResponseApi>(API_URL + "/hello", userData).then((response) => {
      setLoading(true);

      if (response) {
        setResponse(response.data);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    userSend();
  }, []);

  return (
    <>
      <div className="container form">
        <div className="row">
          <div className="col "></div>
          <div className="col-xs-12 col-lg-6">
            {" "}
            <form>
              <legend>
                Login |{" "}
                <Link href="/signin">
                  <a>Signup</a>
                </Link>
              </legend>
              <div className="form-group row"></div>

              <div className="form-group" onSubmit={handleSubmit}>
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-4"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>

              <br />
              <Link href={"/"}>
                <a>Forgot the password?</a>
              </Link>
              <br />
              <br />
              <button
                type="submit"
                onClick={userSend}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
