import React from "react";
import src from "../../image/photo-1414235077428-338989a2e8c0.jpg";
import "./Content1.css";

const Content1 = () => {
  return (
    <div>
      <div className="image">
        <img alt="img" src={src} style={{ height: "500px" }} />
      </div>
    </div>
  );
};

export default Content1;
