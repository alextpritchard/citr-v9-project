import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",

    {},
    [
      React.createElement("h1", {}, "Padre Gino's"),
      React.createElement(Pizza, {
        name: "Margherita",
        description: "Tomato, mozzarella, and basil",
      }),
      React.createElement(Pizza, {
        name: "Pepperoni",
        description: "Tomato, mozzarella, and pepperoni",
      }),
      React.createElement(Pizza, {
        name: "Hawaiian",
        description: "Tomato, mozzarella, ham, and pineapple",
      }),
      React.createElement(Pizza, {
        name: "Vegetarian",
        description: "Tomato, mozzarella, and assorted vegetables",
      }),
    ],
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
