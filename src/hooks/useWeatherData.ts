import { useState, useCallback } from "react";

const useWeatherData = (city: string) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const API_KEY = "6d10adca9cf447caaec03535240812"

const fetchData = useCallback(async (city: string) => {
    if (!city) return;
    setLoading(true);
    setError(null);
  
    try {
        
      const weatherResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`
      );
  
      if (!weatherResponse.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const data = await weatherResponse.json();
      const currentHour = new Date().getHours();
      const currentMinutes = new Date().getMinutes();
      
      const upcomingHours = data.forecast.forecastday[0].hour.filter((hour: { time: string | number | Date; }) => {
        const hourTime = new Date(hour.time).getHours();
        const isInFuture = hourTime > currentHour || (hourTime === currentHour && new Date(hour.time).getMinutes() > currentMinutes);
        return isInFuture;
      }).slice(0, 5);
  
      setWeatherData(data);
      setForecastData(upcomingHours);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocorreu um erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  }, []);
  
  return { weatherData, forecastData, loading, error, fetchData };
};

export default useWeatherData;
