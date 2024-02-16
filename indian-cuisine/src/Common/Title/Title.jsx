import React from "react";
import "./Title.css";

const Title = (props) => {
  const title = props.name;
  return (
    <div>
      <h1 className="title">
        <strong>{title}</strong>
      </h1>
      <hr className="divider" />
    </div>
  );
};

export default Title;
