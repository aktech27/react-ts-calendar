import { render, screen } from "@testing-library/react";
import CalendarHeading from "../CalendarHeading";

test("should have 2 rows", () => {
  render(<CalendarHeading heading="March 2020" />);
  const tableElement = screen.getAllByRole("row");
  expect(tableElement.length).toBe(2);
});

test("should have 7 columns (7 days)", () => {
  render(<CalendarHeading heading="March 2020" />);
  const tableElement = screen.getAllByRole("row");
  expect(tableElement[1].childNodes.length).toBe(7);
});
