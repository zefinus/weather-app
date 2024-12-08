import React from "react";
import { FlatList, Text, Image } from "react-native";
import moment from "moment";
import {
  Container,
  Title,
  HourContainer,
  ForecastItem,
  Hour,
  Temperature,
  Icon,
} from "./Forecast.styles";

interface HourlyForecastProps {
  forecast: {
    time: string;
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  }[];
}

const Forecast: React.FC<HourlyForecastProps> = ({ forecast }) => {
  if (forecast.length <= 0) {
    return <></>;
  }

  return (
    <Container>
      <Title>Hourly Forecast</Title>
      <FlatList
        data={forecast}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({
          item,
        }: {
          item: HourlyForecastProps["forecast"][number];
        }) => (
          <ForecastItem>
            <HourContainer>
              <Hour>{moment(item.time).format("h:mm")} </Hour>
              {item.condition.icon && (
                <Icon source={{ uri: "http:" + item.condition.icon }} />
              )}
            </HourContainer>

            <Temperature>{Math.round(item.temp_c)}°C</Temperature>
          </ForecastItem>
        )}
        style={{ maxHeight: 250 }}
      />
    </Container>
  );
};

export default Forecast;
