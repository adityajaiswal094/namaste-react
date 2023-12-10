import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="heading">H1 tag using JSX!</h1>;

const num = 10000;

// JSX prevents cross-site scripting attacks - it sanitizes the data before running it

// React Functional Component
const HeadingComponent = () => (
  <div>
    <Title />
    <Title></Title>
    {Title()}
    <h2>{num}</h2>
    {100 + 200}
    <h1 className="heading">Namaste React Functional Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
