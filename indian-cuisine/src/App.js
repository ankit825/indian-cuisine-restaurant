import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home/Home";
import "./font/Wake Snake Free Trial.ttf";
import Service from "./Page/Service/Service";

import SignUp from "./Page/SignUp/SignUp";
import Header from "./Components/Header/Header";
import Menu from "./Page/Menu/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
