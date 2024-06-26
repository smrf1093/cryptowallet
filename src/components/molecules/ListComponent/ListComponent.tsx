import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

interface ListComponentProps {
  data: string[];
}

const ListComponent: React.FC<ListComponentProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      )}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default ListComponent;
