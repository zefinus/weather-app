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
        <City>
          {name} - {country}
        </City>
        <RefreshButton
          onPress={() => refresh}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <MaterialIcon name="refresh"></MaterialIcon>
        </RefreshButton>
      </Header>

      <Description>{condition.text}</Description>
      <Row>
        {condition.icon && <Icon source={{ uri: "http:" + condition.icon }} />}
        <Temperature>{Math.round(temp_c)}°C</Temperature>
      </Row>
      <Row>
        <InfoBlock>
          <Tag>
            <MaterialIcon name="wind-power" />
            <Info>Wind</Info>
          </Tag>
          <Info>{wind_kph} km/h</Info>
        </InfoBlock>
        <InfoBlock>
          <Tag>
            <MaterialIcon name="water-drop" />
            <Info>Humidity</Info>
          </Tag>
          <Info>{humidity}%</Info>
        </InfoBlock>
      </Row>
    </Container>
  );
};

export default WeatherInfo;
