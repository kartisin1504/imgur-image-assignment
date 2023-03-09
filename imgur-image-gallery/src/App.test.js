import { render, screen } from "@testing-library/react";
import App from "./App";
describe("Load image component", () => {
  test("show responsive images and load pages", () => {
    render(<App />);
    const linkElement = screen.getByText(
      /Responsive Photo Gallery in React JS/i
    );
    expect(linkElement).toBeInTheDocument();
  });
  
});
