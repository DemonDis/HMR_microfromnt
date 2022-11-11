import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import BtnNoHot from "./BtnNoHot"
import BtnHot from "./BtnHot";

const App = () => (
  <div className="container">
    <div>Name: app-1</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <BtnHot/>
    <BtnNoHot/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
