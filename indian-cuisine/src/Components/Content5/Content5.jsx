import React from "react";
import "./Content5.css";

const Content5 = () => {
  return (
    <div>
      <div
        className="bgclass"
        style={{
          height: "500px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h5>Simply But Delicious Experience</h5>
        <h1>
          We <span className="brown">Created </span>Best Dining Experience For
          <br />
          You & <span className="brown">Your Family</span>
        </h1>
      </div>
    </div>
  );
};

export default Content5;
