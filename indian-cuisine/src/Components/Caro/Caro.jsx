import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./Caro.css";

// /indian-cuisine/public/myimg/emile-mbunzama-cLpdEA23Z44-unsplash.jpg
const Caro = () => {
  return (
    <Carousel controls={false} className="carousel">
      <Carousel.Item
        interval={5000}
        className="caro"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
        }}
      >
        {/* <img
          className=" img-fluid"
          src="myimg/emile-mbunzama-cLpdEA23Z44-unsplash.jpg"
          alt="First slide"
          style={{}}
        /> */}
      </Carousel.Item>
      <Carousel.Item
        interval={5000}
        className="caro1"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
        }}
      >
        {/* <img
          className="img-fluid"
          src="myimg/emile-mbunzama-cLpdEA23Z44-unsplash.jpg"
          alt="Second slide"
        /> */}
      </Carousel.Item>
      <Carousel.Item
        interval={5000}
        className="caro2"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          flexShrink: "0",
        }}
      >
        {/* <img
          className="img-fluid"
          src="myimg/eiliv-aceron-ZuIDLSz3XLg-unsplash (1).jpg"
          alt="Third slide"
        /> */}
      </Carousel.Item>
      <Carousel.Item
        interval={5000}
        className="caro3"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          flexShrink: "0",
        }}
      >
        {/* <img
          className="img-fluid"
          src="myimg/eiliv-aceron-ZuIDLSz3XLg-unsplash (1).jpg"
          alt="Third slide"
        /> */}
        <h1 style={{ color: "white" }}>Reserve your Table</h1>
      </Carousel.Item>
    </Carousel>
  );
};

export default Caro;
