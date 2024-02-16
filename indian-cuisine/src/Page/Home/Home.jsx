import React from "react";
import Header from "../../Components/Header/Header";
import Content1 from "../../Components/Content1/Content1";
import Content2 from "../../Components/Content2/Content2";
import Content3 from "../../Components/Content3/Content3";
import "./Home.css";
import Content4 from "../../Components/Content4/Content4";
import Footer from "../../Components/Footer/Footer";
import CardComponent from "../../Components/CardComponent/CardComponent";
import MenuCard from "../../Components/MenuCard/MenuCard";
import Content5 from "../../Components/Content5/Content5";

// dev-f1yc0joljuhciyk3.us.auth0.com
// client - sf8DzDYzUcvkPss8S7l9jeq6E9SnwH64

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Content1 />
      <CardComponent />
      <MenuCard />
      <Content2 />
      <Content3 />
      <Content5 />
      <Footer />
    </div>
  );
};

export default Home;
