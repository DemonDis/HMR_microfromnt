import React from "react";
// import component from "./BtnTest";
import { hot } from 'react-hot-loader/root';
const Button = () => {
//   let demoComponent = component();

// document.body.appendChild(demoComponent);

// // HMR interface
// if (module.hot) {
//   // Capture hot update
//   module.hot.accept("./BtnTest", () => {
//     const nextComponent = component();

//     // Replace old content with the hot loaded one
//     document.body.replaceChild(nextComponent, demoComponent);

//     demoComponent = nextComponent;
//   });
// }

  return (
    <div className="container">
    <button>TESTx sd asd</button>
    {/* <BtnTest/> */}
  </div>
  )


};

export default hot(Button);