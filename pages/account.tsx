import { NextPage } from "next";
import Link from "next/link";
import { useRef } from "react";
import { FaPlus, FaHeart, FaBan, FaEdit } from "react-icons/fa";

const Account: NextPage = () => {
  let inputRef: any;

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    console.log(fileObj);

    if (!fileObj) {
      return;
    }
  };

  return (
    <>
      <div className="container account">
        <div className="row">
          <div className="col col-xs-12">
            <div className="account-image ">
              <input
                type="file"
                id="imgFile"
                name="img"
                accept="image/*"
                hidden={true}
                ref={(refParam) => (inputRef = refParam)}
                onChange={handleFileChange}
              />

              <button
                type="button"
                className="button-account btn btn-primary"
                onClick={() => inputRef.click()}
              >
                <FaPlus />
              </button>
            </div>
            <br />
            <h1>Jonathan</h1>
            <Tab />

            <button type="button" className=" btn btn-outline-danger">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Table = (): JSX.Element => {
  return (
    <>
      <table className="table ">
        <tbody>
          <tr className="table">
            <th scope="row">
              <Link href="jonathan">
                <a>Jonathan</a>
              </Link>
            </th>
            <td>
              <FaBan color="pink" cursor={"pointer"} />
            </td>
            <td>
              <FaHeart color="pink" cursor={"pointer"} />
            </td>
          </tr>
          <tr className="table">
            <th scope="row">
              <Link href="jonathan">
                <a>Jonathan</a>
              </Link>
            </th>
            <td>
              <FaBan color="pink" cursor={"pointer"} />
            </td>
            <td>
              <FaHeart color="pink" cursor={"pointer"} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Tab = (): JSX.Element => {
  return (
    <>
      <ul className="nav nav-tabs tab " role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#home"
            aria-selected="true"
            role="tab"
          >
            Info
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#followed"
            aria-selected="false"
            role="tab"
          >
            <FaHeart color="red" /> 30
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#vs"
            aria-selected="false"
            role="tab"
          >
            VS followed
          </a>
        </li>
      </ul>
      <hr
        style={{
          borderColor: "gray",
          borderWidth: "2px",
          width: "30%",
          marginLeft: "35%",
        }}
      />
      <div id="myTabContent " className="tab-content tab ">
        <div className="tab-pane fade active show" id="home" role="tabpanel">
          <Info />
        </div>
        <div className="tab-pane fade" id="followed" role="tabpanel">
          <Table />
        </div>

        <div className="tab-pane fade" id="vs" role="tabpanel">
          Followed
        </div>
      </div>
    </>
  );
};

const Info = (): JSX.Element => {
  return (
    <>
      <table className="table ">
        <tbody>
          <tr className="table-primary">
            <td>
              <p>Username</p>
            </td>
            <td>
              <p>Jonathan</p>
            </td>
            <td>
              <div>
                <FaEdit />
              </div>
            </td>
          </tr>
          <tr className="table-primary">
            <td>
              <p>Email</p>
            </td>
            <td>
              <p>Jonathan@gmail.com</p>
            </td>
            <td>
              <div>
                <FaEdit />
              </div>
            </td>
          </tr>

          <tr className="table-primary">
            <td>
              <p>Password</p>
            </td>
            <td>
              <p>........</p>
            </td>
            <td>
              <div>
                <FaEdit />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Account;
