import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { itemStyles } from "@/styles/index";

interface Item {
  id: string;
  image: string;
  title: string;
  description: string;
}

const section3Data = {
  title: "Section 3",
  items: [
    {
      id: "1",
      image: "https://via.placeholder.com/60",
      title: "Trust Wallet",
      description: "Some description",
    },
    {
      id: "2",
      image: "https://via.placeholder.com/60",
      title: "Trust Wallet",
      description: "Some description",
    },
    {
      id: "3",
      image: "https://via.placeholder.com/60",
      title: "Trust Wallet",
      description: "Some description",
    },
    {
      id: "4",
      image: "https://via.placeholder.com/60",
      title: "Trust Wallet",
      description: "Some description",
    },
    {
      id: "5",
      image: "https://via.placeholder.com/60",
      title: "Trust Wallet",
      description: "Some description",
    },
  ],
};

const HorizontalList: React.FC = () => {
  return (
    <FlatList
      data={section3Data.items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={itemStyles.itemContainer}>
          <Image source={{ uri: item.image }} style={itemStyles.itemImage} />
          <View style={itemStyles.itemContent}>
            <Text style={itemStyles.itemTitle}>{item.title}</Text>
            <Text style={itemStyles.itemDescription}>{item.description}</Text>
          </View>
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.horizontalList}
    />
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionMoreButtonText: {
    fontSize: 18,
    color: "#347AF0",
  },
  horizontalList: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});

export default HorizontalList;
