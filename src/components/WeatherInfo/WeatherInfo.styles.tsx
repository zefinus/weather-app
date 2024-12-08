import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
export const Container = styled.View`
  align-items: center;
  padding: 20px;
  width: 95%;
  align-self: center;
  background-color: transparent;
  height: 50%;
`;

export const City = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  width: 70%;
  align-self: left;

  color: white;
`;

export const Tag = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  width: 100%;
  padding: 10px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: rgba(2558, 255, 255, 0.3);
`;

export const MaterialIcon = styled(MaterialIcons)`
  font-size: 24px;
  color: white;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 10px;
  flex: 1;
  flex-grow: 1;
  justify-content: space-evenly;
  align-items: center;
`;
export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  border-bottom-color: white;
  border-bottom-width: 2px;
  align-self: flex-start;
  justify-content: space-between;
  align-items: center;
`;

export const Temperature = styled.Text`
  font-size: 55px;
  font-weight: bold;
  color: white;
`;

export const Description = styled.Text`
  font-size: 18px;
  align-self: flex-start;
  color: white;
`;

export const Info = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: white;
`;

export const Icon = styled.Image`
  width: 90px;
  height: 90px;
  margin-top: 10px;
`;
export const InfoBlock = styled.View`
  flex-direction: column;

  width: 50%;
  flex: 1;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const RefreshButton = styled.TouchableOpacity`
  flex-direction: column;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;
