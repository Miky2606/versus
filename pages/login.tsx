import { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
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

           

              <div className="form-group">
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
                <Link href={"/"}><a>Forgot the password?</a></Link>
              <br />
              <br />
              <button type="submit" className="btn btn-primary">
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
