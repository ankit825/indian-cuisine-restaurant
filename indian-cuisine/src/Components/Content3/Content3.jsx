import React from "react";
import "./Content3.css";
import img from "../../image/c837a6_3a1c5d6305c741b193c7026321c090ef~mv2.webp";

const Content3 = () => {
  return (
    <div className="main">
      <div className="row content-3-row">
        <div className="col-md-4">
          <img className="src" alt="img" src={img} />
        </div>
        <div className="col-md-8 chef">
          <h2>
            An Innovative
            <br />
            Conept from
            <br />
            Chef Brenda Pio
          </h2>
          <p>
            This is a bar and restaurant with all facilities including
            <br />
            reservation partties and online store From deciding the menu <br />
            of the restaurant to buying the food supplies and managing the food
            <br />
            preparation, a chef ensures that visitors and guests receive the
            <br />
            best cuisines. Apart from this, they also supervise other staff in
            <br />
            the kitchen and allocate responsibilities equally.
          </p>
          <button type="button" className="btn btn-primary">
            About Chef
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content3;
