import React from "react";

import BtnApp1 from "./BtnApp1";
import {BtnApp2} from "./ExportComp";

import "./index.css";

const App = () => {
  return (
    <div className="container">
      <div>Name: app-1</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <BtnApp1/>
      <BtnApp2/>
    </div>
  )
};

export default App
