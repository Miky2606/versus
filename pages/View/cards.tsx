import { url } from "inspector";
import { NextPage } from "next";

const Cards: NextPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="card mb-3 vs-card">
              <h3 className="card-header">
                <span style={{ color: "blue" }}>Aim</span>{" "}
                <img src="/vs.png" style={{ width: "10%" }} />{" "}
                <span style={{ color: "red" }}>Aom</span>
              </h3>
              <div className="card-body">
                <h6 className="card-title">Time Left: 10 hours </h6>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col"></div>
                  <div className="col">
                    <ImageVs />
                  </div>
                  <div className="col"></div>
                </div>
              </div>

              <div className="card-body">
                <p className="card-text">
                  <span style={{ color: "blue" }}>30 votes</span>{" "}
                  <img src="/vs.png" style={{ width: "10%" }} />{" "}
                  <span style={{ color: "red" }}>50 votes</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

const ImageVs = () => {
  return (
    <div className="pageOption">
      <a href="" className="photo"></a>
      <a href="" className="cinema"></a>
    </div>
  );
};

export default Cards;
