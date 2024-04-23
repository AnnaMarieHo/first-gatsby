import React from "react";
import { render, screen } from "@testing-library/react";
import TestComponent from "./TestComponent";

test("renders TestComponent component", () => {
  render(<TestComponent />);
  const paragraphElement = screen.getByText("This is testComponent 1");
  expect(paragraphElement).toBeInTheDocument();
});
