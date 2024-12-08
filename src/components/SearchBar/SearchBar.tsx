import React from "react";
import { FlatList, Text } from "react-native";
import useCitySearch from "../../hooks/useCitySearch";
import {
  Container,
  Input,
  InputContainer,
  SearchIcon,
  Suggestion,
  SuggestionsList,
} from "./SearchBar.styles";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { query, suggestions, loading, setQuery, handleCitySelect } =
    useCitySearch(onSearch);

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Search for a city"
          value={query}
          onChangeText={setQuery}
        />
        <SearchIcon name="search" />
      </InputContainer>
      {loading && <Text>Loading...</Text>}

      {suggestions.length > 0 && (
        <SuggestionsList>
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Suggestion onPress={() => handleCitySelect(item.name)}>
                {item.name} / {item.country}
              </Suggestion>
            )}
          />
        </SuggestionsList>
      )}
    </Container>
  );
};

export default SearchBar;
