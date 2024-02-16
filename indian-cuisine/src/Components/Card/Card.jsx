import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div
        className="card card-container"
        style={{ width: "25rem", border: "none" }}
      >
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1>{props.text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
