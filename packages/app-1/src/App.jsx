import React from "react";

import BtnApp1 from "./BtnApp1";
import BtnApp2 from "app_2/BtnApp2"

import SvgTest from "app_2/SvgTest"
import SvgTestImg from "app_2/SvgTest"
import PngTestImg from "app_2/PngTestImg"


import "./index.css";

const App = () => {
  return (
    <div className="container">
      <div>Name: app-1</div>
      <BtnApp1/>
      <BtnApp2/>
      <img src={PngTestImg} alt="PngTestImg" />
      <SvgTestImg/>
      <SvgTest />
    </div>
  )
};

export default App
