import { render, screen } from "@testing-library/react";
import Gallery from "./gallery";

describe("The image component", () => {
  test("Test the image display component", () => {
    render(<Gallery />);
    const testImg = document.querySelector("img");
    expect(testImg.alt).toContain("The image alt tag for the large image");
  });
  test("src contains correct value", () => {
    render(<Gallery />);
    const testImage = document.querySelector("img");
    expect(testImage.alt).toContain("http://i.imgur.com/");
  });
});
