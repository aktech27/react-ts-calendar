import { screen, render } from "@testing-library/react";
import Calendar from "../Calendar";

test("should show October 2022 in heading", () => {
  render(<Calendar date="3/10/2022" />);
  const monthAndYearText = screen.getByText(/October 2022/i);
  expect(monthAndYearText).toBeInTheDocument();
});

test("should show March 2020 in heading", () => {
  render(<Calendar date="23/3/2020" />);
  const monthAndYearText = screen.getByText(/March 2020/i);
  expect(monthAndYearText).toBeInTheDocument();
});

test("should show invalid date", () => {
  render(<Calendar date="35/1/2022" />);
  const headingElement = screen.getByRole("heading", { name: "Invalid Date given" });
  expect(headingElement).toBeInTheDocument();
});
