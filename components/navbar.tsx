import { useState, useEffect } from "react";
import { getUserApi } from "../controller/sign-login";
import { User } from "../pages/api/interface/userDB";

const NavBar = (): JSX.Element => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>("");

  const { API_URL } = process.env;
  const api = API_URL + "/hello";

  useEffect(() => {
    getUserApi(api)
      .then((res) => setUser(res))
      .catch((err) => setError(err.msg));
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Versus
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>

              {error !== "" ? (
                <>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      Sign In
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="" className="nav-link">
                      Login
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      {user?.username}
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
