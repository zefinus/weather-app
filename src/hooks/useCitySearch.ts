import { useState, useCallback } from "react";
import { debounce } from "lodash";

interface CitySearchHook {
  query: string;
  suggestions: any[];
  loading: boolean;
  setQuery: (query: string) => void;
  handleCitySelect: (city: string) => void;
}

const useCitySearch = (onSearch: (city: string) => void): CitySearchHook => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
const API_KEY = "6d10adca9cf447caaec03535240812"
  const fetchSuggestions = async (searchQuery: string) => {
    if (!searchQuery) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${searchQuery}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Failed to fetch city suggestions", error);
    } finally {
      setLoading(false);
    }
  };

 
  const debouncedFetchSuggestions = useCallback(
    debounce(fetchSuggestions, 500),
    []
  );

  
  const handleInputChange = (text: string) => {
    setQuery(text);
    debouncedFetchSuggestions(text);
  };

  
  const handleCitySelect = (city: string) => {
    setQuery(city);
    onSearch(city); 
    setSuggestions([]); 
  };

  return {
    query,
    suggestions,
    loading,
    setQuery: handleInputChange,
    handleCitySelect,
  };
};

export default useCitySearch;