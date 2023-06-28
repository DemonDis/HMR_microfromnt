import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import BtnApp1 from "./BtnApp1";
import BtnApp2 from "app_2/BtnApp2"

import SvgTest from "app_2/SvgTest"
import SvgTestImg from "app_2/SvgTest"
import PngTestImg from "app_2/PngTestImg"

import Home from './components/Home'
import Login from './components/Login'
import Contact from './components/Contact'

import "./index.css";

const App = () => {
  return (
    <Router>
          <div className="container">
            <div>Name: app-1</div>
            <BtnApp1/>
            <BtnApp2/>
            <img src={PngTestImg} alt="PngTestImg" />
            <SvgTestImg/>
            <SvgTest />
          </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
};

export default hot(App);
