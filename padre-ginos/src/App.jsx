import { createRoot } from "react-dom/client";

import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order now</h1>
      <Pizza
        name="Margherita"
        description="BBQ Chicken"
        image={"/public/pizzas/bbq_ckn.webp"}
      />
      <Pizza
        name="Pepperoni"
        description="Tomato, mozzarella, and pepperoni"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="Tomato, mozzarella, ham, and pineapple"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Vegetarian"
        description="Tomato, mozzarella, and assorted vegetables"
        image={"/public/pizzas/mediterraneo.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
