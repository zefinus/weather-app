import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-grow: 1;
  background-color: #89bbff;
`;
export const ContainerContent = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const LoadingText = styled.Text`
  font-size: 18px;
  color: #555;
`;

export const ErrorText = styled.Text`
  font-size: 18px;
  color: red;
`;
