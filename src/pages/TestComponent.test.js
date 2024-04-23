import React from "react";
import { render, screen } from "@testing-library/react";
import TestComponent from "./TestComponent";

test("renders TestComponent component", () => {
  render(<TestComponent />);
  const paragraphElement = screen.getByText("This my test component");
  expect(paragraphElement).toBeInTheDocument();
});
