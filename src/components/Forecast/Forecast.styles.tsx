import styled from "styled-components/native";

export const Container = styled.View`
  width: 95%;
  padding: 10px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  max-height: 300px;
  bottom: 30px;
  color: white;
  position: sticky;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
`;

export const List = styled.FlatList`
  max-height: 250px;
`;

export const ForecastItem = styled.View`
  align-items: center;
  color: white;
  border-top-color: white;
  border-top-width: 1px;

  justify-content: space-between;
  flex-direction: row;
  margin-right: 15px;
`;

export const HourContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Hour = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 600;
`;

export const Temperature = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: white;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  margin-top: 5px;
`;
