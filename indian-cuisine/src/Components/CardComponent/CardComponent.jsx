import React from "react";
import img1 from "../../image/pexels-senuscape-2313686.jpg";
import img2 from "../../image/istockphoto-692557700-170667a.webp";
import img3 from "../../image/just-hold-the-green-chilli-for-potus-but-bring-on-the-green-chutney-.jpg";
import "./CardComponent.css";

const CardComponent = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: "70px" }}>
        <h4
          style={{
            textAlign: "center",
            fontFamily: "restaurant",
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          The Perfect Offer For You
        </h4>
        <div className="row main">
          <div className="col-lg-4 mb-4 ">
            <div className="card">
              <img className="card-img-top" src={img1} alt="" />

              <div className="card-body">
                <h5 className="card-title">Bacon Ranch Chicken</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={img2} alt="" />

              <div className="card-body">
                <h5 className="card-title">Bacon Ranch Burger</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4 ">
            <div className="card">
              <img className="card-img-top" src={img3} alt="" />

              <div className="card-body">
                <h5 className="card-title">Bacon Ranch samosa</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
