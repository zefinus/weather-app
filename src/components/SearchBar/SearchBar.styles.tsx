import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;

export const Container = styled.View`
  position: relative;
  padding: 10px;
  background-color: transparent;
  width: 100vw;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #f9f9f9;
  padding-left: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  color: #333;
`;

export const SearchIcon = styled(MaterialIcons)`
  font-size: 24px;
  color: #ccc;
  position: absolute;
  right: 15px;
`;

export const SuggestionsList = styled.View`
  position: absolute;
  top: 50px;
  width: 92%;
  align-self: center;
  background-color: #fff;
  border-radius: 10px;
  max-height: 200px;
  z-index: 999;
  overflow: hidden;
`;

export const Suggestion = styled.Text`
  padding: 10px;
  font-size: 16px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  color: #333;
  z-index: 999;
`;
