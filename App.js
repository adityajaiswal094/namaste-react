import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => HTML Element(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React by Aditya 🚀"
// );

// JSX is not HTML or XML in JS
// JSX is HTML-like or XML-like syntax but not equal to HTML or XML

// JSX Element => JSX Code is transpiled by PARCEL(with help of Babel) before it reaches the JS Engine
// meaning it is converted into a code which is understood by the JS Engine

// JSX => React.createElement => JS Object => HTML Element(render)
const jsxHeading = <h1 id="heading">H1 tag using JSX!</h1>;

// console.log(heading);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
