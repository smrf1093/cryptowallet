import React from 'react';
import { TextInput, StyleSheet, Dimensions, View } from 'react-native';

interface SearchInputProps {
  query: string;
  setQuery: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ query, setQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '90%', 
    
  },
});

export default SearchInput;
