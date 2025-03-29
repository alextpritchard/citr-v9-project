import { createRoot } from "react-dom/client";

import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order now</h1>
      <Pizza name="Margherita" description="Tomato, mozzarella, and basil" />
      <Pizza name="Pepperoni" description="Tomato, mozzarella, and pepperoni" />
      <Pizza
        name="Hawaiian"
        description="Tomato, mozzarella, ham, and pineapple"
      />
      <Pizza
        name="Vegetarian"
        description="Tomato, mozzarella, and assorted vegetables"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
