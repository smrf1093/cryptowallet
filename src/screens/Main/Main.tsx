import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { TabsComponent, HorizontalList } from "@/components/molecules";
import { itemStyles } from "@/styles/index";

const Main: React.FC = () => {
  // Mock data for the three sections
  const section1Data = {
    title: "Latest",
    item: {
      image: "https://via.placeholder.com/150",
      title: "$50,000 USDT Airdrop",
      description:
        "Join both of our quests with Pixelverse to earn rewards! Tap-Tap ->",
    },
  };

  const renderHeader = () => (
    <View>
      {/* Section 1 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{section1Data.title}</Text>
          <TouchableOpacity style={styles.sectionMoreButton}>
            <Text style={styles.sectionMoreButtonText}>→</Text>
          </TouchableOpacity>
        </View>
        <View style={itemStyles.itemContainer}>
          <Image
            source={{ uri: section1Data.item.image }}
            style={itemStyles.itemImage}
          />
          <View style={itemStyles.itemContent}>
            <Text style={itemStyles.itemTitle}>{section1Data.item.title}</Text>
            <Text style={itemStyles.itemDescription}>
              {section1Data.item.description}
            </Text>
          </View>
        </View>
      </View>

      {/* Section 2 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Discover dApp</Text>
          <TouchableOpacity style={styles.sectionMoreButton}>
            <Text style={styles.sectionMoreButtonText}>→</Text>
          </TouchableOpacity>
        </View>
        <TabsComponent />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={[]} // Dummy data for FlatList to render
        renderItem={null} // No items to render, just sections
        ListFooterComponent={() => (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Top dApp tokens</Text>
              <TouchableOpacity>
                <Text style={styles.sectionMoreButtonText}>→</Text>
              </TouchableOpacity>
            </View>
            <HorizontalList />
          </View>
        )}
        keyExtractor={() => "dummy"} // Dummy key extractor
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
	color: "#347AF0",
  },
  sectionMoreButton: {
    padding: 10,
  },
  sectionMoreButtonText: {
    fontSize: 18,
    color: "#347AF0",
  },
});

export default Main;
