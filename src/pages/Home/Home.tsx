import React, { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import Forecast from "../../components/Forecast/Forecast";
import useWeatherData from "../../hooks/useWeatherData";
import { Container, LoadingText, ErrorText } from "./Home.styles";

const Home: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const { weatherData, forecastData, loading, error, fetchData } =
    useWeatherData(city);

  const handleSetCity = useCallback((newCity: string) => {
    setCity(newCity);
  }, []);

  useEffect(() => {
    if (city) {
      fetchData(city);
    }
  }, [city, fetchData]);

  const renderContent = () => {
    if (loading) return <LoadingText>Loading...</LoadingText>;
    if (error) return <ErrorText>{error}</ErrorText>;

    return (
      <>
        <WeatherInfo weather={weatherData} refresh={() => fetchData(city)} />
        <Forecast forecast={forecastData} />
      </>
    );
  };

  return (
    <Container>
      <SearchBar onSearch={handleSetCity} />
      {renderContent()}
    </Container>
  );
};

export default Home;
