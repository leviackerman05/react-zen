const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
]);
//if you have to give 2 elements as siblings the 3 argumnent can take an array of elements as shown above
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);
//the above is creating an h1 element inside React, that is a core react thing
const root = ReactDOM.createRoot(document.getElementById("root"));
//but when we want to put this h1 into our browser or DOM so here we will use ReactDOM
root.render(parent);
