import React from "react";
import { Text } from "react-native";
import {
  Container,
  City,
  Temperature,
  Description,
  Icon,
  Row,
  InfoBlock,
  Info,
  Tag,
  MaterialIcon,
  RefreshButton,
  Header,
} from "./WeatherInfo.styles";

interface WeatherInfoProps {
  weather: {
    location: {
      name: string;
      region: string;
      country: string;
      tz_id: string;
      localtime_epoch: number;
      localtime: string;
    };
    current: {
      condition: {
        text: string;
        icon: string;
      };
      temp_c: number;
      wind_kph: number;
      humidity: number;
    };
  };
  refresh: () => void;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather, refresh }) => {
  if (!weather) {
    return <></>;
  }

  const { name, country } = weather.location;
  const { condition, temp_c, wind_kph, humidity } = weather.current;

  return (
    <Container>
      <Header>
        <City testID="weather-city">
          {name} - {country}
        </City>
        <RefreshButton
          onPress={() => refresh}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          testID="refresh-button"
        >
          <MaterialIcon name="refresh" testID="refresh-icon" />
        </RefreshButton>
      </Header>

      <Description testID="weather-description">{condition.text}</Description>
      <Row testID="weather-row">
        {condition.icon && (
          <Icon
            testID="weather-icon"
            source={{ uri: "http:" + condition.icon }}
          />
        )}
        <Temperature testID="weather-temperature">
          {Math.round(temp_c)}°C
        </Temperature>
      </Row>
      <Row testID="weather-info-row">
        <InfoBlock testID="weather-info-wind">
          <Tag testID="wind-tag">
            <MaterialIcon name="wind-power" testID="wind-icon" />
            <Info testID="wind-info">Wind</Info>
          </Tag>
          <Info testID="wind-speed">{wind_kph} km/h</Info>
        </InfoBlock>
        <InfoBlock testID="weather-info-humidity">
          <Tag testID="humidity-tag">
            <MaterialIcon name="water-drop" testID="humidity-icon" />
            <Info testID="humidity-info">Humidity</Info>
          </Tag>
          <Info testID="humidity-value">{humidity}%</Info>
        </InfoBlock>
      </Row>
    </Container>
  );
};

export default WeatherInfo;
