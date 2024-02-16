import React from "react";
import bgImg from "../../image/is16062-image-kwvyfkwr.jpg";
import "./MenuCard.css";

const MenuCard = () => {
  return (
    <div className="bg">
      <div
        style={{
          backgroundImage: `url(${require("../../image/top-view-delicious-meat-soup-with-potatoes-greens-dark-blue-desk.jpg")})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#fff",

          height: "500px",
        }}
      >
        <div className="text">
          <h1 style={{ marginLeft: "20px" }}>
            Order Your Favorite
            <br /> Food Now
          </h1>
          <p
            style={{
              color: "white",
              fontFamily: "restaurant",
              marginLeft: "20px",
            }}
          >
            Get fast deliever food on your doorstep.
            <br />
            only one step away
          </p>
          <button className="btn btn-sucess">ORDER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
