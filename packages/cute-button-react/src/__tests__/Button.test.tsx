import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../Button";

afterEach(cleanup);

describe("Button Component", () => {
  test("renders children correctly", () => {
    render(<Button>{"Cute Button <3"}</Button>);
    expect(screen.getByText("Cute Button <3")).toBeInTheDocument();
  });
});
