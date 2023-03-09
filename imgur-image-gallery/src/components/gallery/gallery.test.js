import { render, screen, waitFor } from "@testing-library/react";
import Gallery from "./gallery";

describe("The image component", () => {
  test("Test the image display component", async () => {
    render(<Gallery />);
    const img = await screen.findAllByRole("img");
    expect(img).toHaveLength;
  });
  test("Test the image display component", () => {
    render(<Gallery />);
    const testImg = document.querySelector("img");
    expect(testImg.alt).toBeInTheDocument();
  });
  test("src contains correct value", () => {
    render(<Gallery />);
    const testImage = document.querySelector("img");
    console.log(testImage);
    expect(testImage.src).toContain("http://i.imgur.com/");
  });
});
