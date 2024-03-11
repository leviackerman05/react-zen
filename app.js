import React from "react";
import { createRoot } from "react-dom/client";

const Title = () => {
  return <h1>Namaste React from a functional Component</h1>;
};
const text = <h3>This is a normal text from a react element</h3>;
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>{console.log("HeHe")}</h2>
      <h2>This is also from a functional Component</h2>
      {text}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
