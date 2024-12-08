import React from "react";
import { render } from "@testing-library/react-native";
import WeatherInfo from "../src/components/WeatherInfo";

const weatherData = {
  location: {
    name: "New York",
    country: "USA",
    region: "New York",
    tz_id: "America/New_York",
    localtime_epoch: 1635564800,
    localtime: "2023-12-08 12:00:00",
  },
  current: {
    condition: {
      text: "Clear",
      icon: "/images/clear.png",
    },
    temp_c: 15,
    wind_kph: 20,
    humidity: 60,
  },
};

jest.mock("@expo/vector-icons", () => ({
  MaterialIcons: "MaterialIcons",
}));

describe("WeatherInfo Component", () => {
  it("renders correctly with weather data", () => {
    const mockRefresh = jest.fn();
    const { getByTestId } = render(
      <WeatherInfo weather={weatherData} refresh={mockRefresh} />
    );

    // City and country are rendered correctly
    const cityText = getByTestId("weather-city").props.children.join("");
    expect(cityText).toBe("New York - USA");

    // Description (weather condition) is rendered
    expect(getByTestId("weather-description").props.children).toBe("Clear");
  });
});
