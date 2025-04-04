import { render, cleanup } from "@testing-library/react"; // add cleanup
import { afterEach, expect, test } from "vitest"; // add afterEach
afterEach(cleanup);

import Pizza from "../Pizza";

test("alt text renders on image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});
