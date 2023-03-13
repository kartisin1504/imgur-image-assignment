import { getAllByRole, render, screen } from "@testing-library/react";
import ImageFilter from "./filter";
describe("Test Image filter Component", () => {
  test("combobox is availabel on screen ", () => {
    //render
    render(<ImageFilter />);

    //manupulate
    const selectionbox = screen.getAllByRole("combobox");

    //expectation
    expect(selectionbox).toHaveLength(1);
  });
  test("combobox is having list of filters ", () => {
    //render
    render(<ImageFilter />);
    screen.logTestingPlaygroundURL();
    //manupulate
    const listOfSelectionVal = screen.getAllByRole("option");

    //expectation
    expect(listOfSelectionVal).toBeInTheDocument;
  });
});
