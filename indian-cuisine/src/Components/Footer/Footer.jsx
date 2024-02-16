import React from "react";
import "./Footer.css";
import logo from "../../image/chef-restaurant-logo-illustrations-template-free-vector.jpg";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid justify-content-center p-0 mx-0 foot">
        <footer>
          <div className="row mb-0 pt-5 row-2 justify-content-md-around justify-content-center text-center">
            <div className="col-auto">
              <figure className="figure">
                <img
                  className="figure-img img-fluid mb-0 "
                  src="https://i.imgur.com/EdxjWh4.jpg"
                  alt=""
                />
                <figcaption className="figure-caption ">
                  HIGHDELIVERY SPEED
                </figcaption>{" "}
              </figure>
            </div>
            <div className="col-auto">
              <figure className="figure">
                <img
                  className="figure-img img-fluid mb-0 "
                  src="https://i.imgur.com/B2QDZvv.jpg"
                  alt=""
                />
                <figcaption className="figure-caption ">
                  24x7 SUPPORT
                </figcaption>{" "}
              </figure>
            </div>
            <div className="col-auto">
              <figure className="figure">
                <img
                  className="figure-img img-fluid mb-0 "
                  src="https://i.imgur.com/2CwAMwd.jpg"
                  alt=""
                />
                <figcaption className="figure-caption ">
                  COMPETITVE PRICES
                </figcaption>{" "}
              </figure>
            </div>
            <div className="col-auto">
              <figure className="figure">
                <img
                  className="figure-img img-fluid mb-0 "
                  src="https://i.imgur.com/DiayLvX.jpg"
                  alt=""
                />
                <figcaption className="figure-caption ">
                  STANDARD DESGIN
                </figcaption>{" "}
              </figure>
            </div>
            <div className="col-auto">
              <figure className="figure">
                <img
                  className="figure-img img-fluid mb-0 "
                  src="https://i.imgur.com/Fw3pD4V.jpg"
                  alt=""
                />
                <figcaption className="figure-caption ">
                  USE OF TRENDS
                </figcaption>{" "}
              </figure>
            </div>
          </div>
          <div className="row  mb-0 mt-5 mx-4 row-2 justify-content-xl-around justify-content-sm-between">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 pt-4 order-1">
              <ul className="list-unstyled">
                <li className="mt-md-0 mt-4">Our Solution</li>
                <li>Intergrated Platform Security </li>
                <li>Core Features</li>
                <li>Product Features and Services</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 pt-4 order-2">
              <ul className="list-unstyled">
                <li className="mt-md-0 mt-4">Your needs</li>
                <li>Intergrated Platform Security </li>
                <li>Core Features</li>
                <li>Product Features</li>
                <li>Pricing</li>
                <li>Product Features</li>
              </ul>
            </div>
            <div className="col-xl-auto col-lg-6  col-md-6 pt-4 col-sm-6 my-sm-0 order-md-3 order-sm-1 d-flex">
              <ul className="list-unstyled">
                <li className="mt-md-0 mt-4">Offer</li>
                <li>Intergrated Security </li>
                <li>Core Features</li>
                <li>Product Features </li>
                <li>Pricing</li>
                <li>Intergrated Security </li>
              </ul>
            </div>
            <div className="col-xl-auto text-left col-lg-4 col-md-4 col-sm-6 col-12 pt-4 my-sm-0 order-6 my-auto">
              <div className="input-group-lg input-group mb-3 mt-md-0 mt-4 search-wrapper">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your e-mail address"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append"></div>
              </div>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <p className="mb-0 pb-0 mt-5">
                    FOLLOW THE WEB ON SOCIAL NETWORKS
                  </p>
                </li>
                <li>
                  <a className="bi bi-facebook" href="/"></a>
                  <a className="bi bi-twitter"></a>
                  <a className="bi bi-instagram"></a>
                  <a className="bi bi-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="line" />
          <div className="row justify-content-lg-around  mx-xl-5 mx-lg-4 mx-3 py-3">
            <div className="col order-1 align-self-center">
              <p className="mb-0 text-uppercase">
                we're accountable for seven days a week, 24 hours a day
              </p>
              <small>
                Contact Number : 789-421-3600 <br /> Email
                Address:BBBootstrap@gmail.com{" "}
              </small>
            </div>
            <div className="col-auto my-sm-0 order-6 my-auto pt-sm-0 pt-3">
              <ul className="list-inline third-row first">
                <li className="list-inline-item active-1  ">
                  {" "}
                  <span>SMART ORDER</span>{" "}
                </li>
                <li className="list-inline-item">
                  <span>GET STARTED</span>
                </li>
              </ul>
            </div>
          </div>
          <hr className="line" />
          <div className="row text-center py-3">
            <div className="col">
              <p className="text-muted">
                <b>ALL RIGHTS ARE RESERVED BY BBBootstrap Inc</b>{" "}
              </p>
            </div>{" "}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
