import React from "react";

import BtnApp1 from "./BtnApp1";
import BtnApp2 from "app_2/BtnApp2"
import { hot } from 'react-hot-loader/root';

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

export default hot(App)
