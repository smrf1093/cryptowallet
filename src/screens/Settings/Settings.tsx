import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings should be placed here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Replace with your desired background color
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Replace with your desired text color
  },
});

export default Settings;
