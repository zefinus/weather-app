import React from "react";
import { render } from "@testing-library/react-native";
import Forecast from "../src/components/Forecast"; // Adjust import path as needed

describe("Forecast Component", () => {
  const mockForecast = [
    {
      time: "2024-12-08T12:00:00",
      temp_c: 22,
      temp_f: 71.6,
      condition: {
        text: "Sunny",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
      },
    },
  ];

  it("renders correctly with forecast data", () => {
    const { getByText, getByTestId } = render(
      <Forecast forecast={mockForecast} />
    );

    // Check if the title is rendered
    expect(getByText("Hourly Forecast")).toBeTruthy();

    // Check if the forecast item contains correct information
    expect(getByText("12:00")).toBeTruthy(); // formatted time
    expect(getByText("22°C")).toBeTruthy(); // temperature

    // Check if the icon image source exists
    const icon = getByTestId("forecast-icon");
    expect(icon.props.source.uri).toBe(
      "http://cdn.weatherapi.com/weather/64x64/day/113.png"
    );
  });
});
