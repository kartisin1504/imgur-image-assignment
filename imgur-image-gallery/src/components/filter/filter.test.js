import { render, screen } from "@testing-library/react";
import ImageFilter from "./filter";
describe("Testing filter for section", () => {
  test("Test the filter component", () => {
    render(<ImageFilter />);
    const text = screen.getByText("User Login Page");
    expect(text).toBeInTheDocument();
  });
});
