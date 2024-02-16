import React from "react";

import Caro from "../../Components/Caro/Caro";
import Card from "../../Components/Card/Card";
import src from "../../image/eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg";
import Title from "../../Common/Title/Title";
import src1 from "../../image/victoria-shes-8OpyEpJVgiQ-unsplash.jpg";
import src2 from "../../image/monika-grabkowska-VVPC-DEBi2I-unsplash.jpg";
import ReserveTable from "../../Components/ReserveTable/ReserveTable";
import "./Service.css";

const Service = () => {
  return (
    <div>
      <Caro />
      <Title name={"Food Masala"} />

      <div className="card-div" style={{ marginLeft: "50px" }}>
        <Card image={src} text={"Special Salad"} />
        <Card image={src1} text={"Cocktail"} />
        <Card image={src2} text={"Dal Makhni"} />
      </div>
      <ReserveTable />
    </div>
  );
};

export default Service;
