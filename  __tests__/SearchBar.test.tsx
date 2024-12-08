import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SearchBar from "../src/components/SearchBar";

jest.mock("@expo/vector-icons", () => ({
  MaterialIcons: "MaterialIcons",
}));

describe("SearchBar Component", () => {
  const mockOnSearch = jest.fn();

  it("renders correctly and interacts with the input", () => {
    const { getByTestId } = render(<SearchBar onSearch={mockOnSearch} />);

    const input = getByTestId("search-input");
    expect(input).toBeTruthy();

    fireEvent.changeText(input, "New York");

    expect(input.props.value).toBe("New York");
  });
});
