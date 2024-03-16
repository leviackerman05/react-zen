import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Search />
      <Body />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
