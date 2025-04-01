import { StrictMode, strictMode } from "react";
import { createRoot } from "react-dom/client";

import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay.jsx";
import Header from "./Header.jsx";

const App = () => {
  return (
    <StrictMode>
      <div>
        <Header />
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
