import React, { useEffect, useRef, useState } from "react";
// import useHistory from "react-router-dom";
import Title from "../../Common/Title/Title";
import "./Header.css";
import logo from "../../image/chef-restaurant-logo-illustrations-template-free-vector.jpg";

import Modal from "../Modal/Modal";
import LoginModal from "../LoginModal/LoginModal";
import { useNavigate } from "react-router-dom";
import SignUp from "../../Page/SignUp/SignUp";
import { useAuth0 } from "@auth0/auth0-react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import User from "../../image/user.png";

import inbox from "../../image/envelope.png";
import settings from "../../image/settings.png";
import help from "../../image/question.png";
import logOut from "../../image/log-out.png";

const Header = () => {
  const navigate = useNavigate();
  const [isShow, setisShow] = useState(false);
  let menuRef = useRef();
  const backdrop = "";
  const [open, setOpen] = useState(false);
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();

  const handleClose = () => {
    setisShow(false);
  };
  const handleOpen = () => {
    // navigate("/SignUp");
    setisShow(true);
  };

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setOpen(false);
  //       console.log(menuRef.current);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  // const bg = {
  //   overlay: {
  //     background: "#FFFF00",
  //   },
  // };

  console.log(isAuthenticated);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand m-3 " href="/">
            {/* <Title name={"INDIAN\nCUISINE"} /> */}
            <img
              src="/myimg/Red Beige Retro Vintage Cafe and Restaurant Badge Logo.png"
              className="logo"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse uli "
            id="navbarNav"
            style={{ justifyContent: "center" }}
          >
            <ul className="navbar-nav  link-nav">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Service">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Service">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Service">
                  Recipies
                </a>
              </li>
            </ul>
          </div>

          {isAuthenticated ? (
            <>
              <div className="menu-container">
                <div
                  className="menu-trigger"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <AccountCircleIcon className="icon-acc" />
                </div>

                <div
                  className={`dropDown-menu ${open ? "active" : "inactive"}`}
                  style={{ zIndex: "10" }}
                >
                  <h3>
                    <br />
                    <span>Website Designer</span>
                  </h3>
                  <ul>
                    <DropdownItem img={User} text={"My Profile"} />

                    <DropdownItem img={inbox} text={"Inbox"} />
                    <DropdownItem img={settings} text={"Settings"} />
                    <DropdownItem img={help} text={"Helps"} />
                    <DropdownItem
                      img={logOut}
                      text={"Logout"}
                      logout={logout}
                    />
                  </ul>
                </div>
              </div>
            </>
          ) : (
            // <AccountCircleIcon className="icon-acc" />
            <button
              // onClick={handleOpen}
              onClick={() => loginWithRedirect()}
              className="btn1 btn btn-success"
            >
              LOG IN
            </button>
          )}
          <button className="btn1 btn btn-success">BOOK NOW</button>
        </div>
      </nav>
      <Modal onClose={handleClose} open={isShow} center classNames="modal">
        <SignUp onClick={(e) => e.stopPropagation()} />
      </Modal>
    </div>
  );
};

function DropdownItem(props) {
  if (props.text === "Logout") {
    return (
      <li
        className="dropDownItem"
        onClick={() =>
          props.logout({
            logoutParams: { returnTo: window.location.origin },
          })
        }
      >
        <img src={props.img} />
        <a> {props.text} </a>
      </li>
    );
  }
  return (
    <li className="dropDownItem">
      <img src={props.img} />
      <a> {props.text} </a>
    </li>
  );
}

export default Header;
