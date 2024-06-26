import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/redux/dataSlice";
import { RootState } from "@/redux/store";
import { ListRenderItem } from "react-native";
import { itemStyles } from "@/styles/index";

const TABS = ["Featured", "DEX", "Lending", "Yield", "BSC"];

interface DataItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const TabsComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Featured");
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);
  const status = useSelector((state: RootState) => state.data.status);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderItem: ListRenderItem<DataItem> = ({ item }) => (
    <View style={itemStyles.itemContainer}>
      <Image source={{ uri: item.icon }} style={itemStyles.itemImage} />
      <View style={itemStyles.itemContent}>
        <Text style={itemStyles.itemTitle}>{item.title}</Text>
        <Text style={itemStyles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={styles.header}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => handleTabPress(tab)}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
            {selectedTab === tab && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>
      {status === "loading" ? (
        <Text>Loading...</Text>
      ) : status === "failed" ? (
        <Text>Error loading data</Text>
      ) : (
        <FlatList
          data={data[selectedTab]}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.list}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  tab: {
    marginRight: 10,
    paddingBottom: 5,
  },
  tabText: {
    fontSize: 16,
    color: "#000",
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: "#347AF0",
  },
  activeTabText: {
    color: "#347AF0",
  },
  tabIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#347AF0",
  },
  list: {
    marginTop: 5,
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  cardImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
  },
});

export default TabsComponent;
