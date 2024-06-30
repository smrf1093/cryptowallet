import React, { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme";
import { SafeScreen } from "@/components/template";

import type { RootScreenProps } from "@/types/navigation";

function Mnemonic({ navigation }: RootScreenProps<"Mnemonic">) {
  const { layout, gutters, fonts } = useTheme();
  const { t } = useTranslation(["inputpage"]);
  const [inputText, setInputText] = useState("");

  const handleDone = () => {
    console.log(inputText); // Replace with your desired functionality
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={setInputText}
          value={inputText}
          placeholder="Enter text here"
          placeholderTextColor="#999"
          multiline
          numberOfLines={4} // Adjust the number of lines as needed
        />

        <TouchableOpacity style={styles.button} onPress={handleDone}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#347AF0", // Replace with your desired background color
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textInput: {
    height: 120, // Increase the height to create a textarea-like input
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "80%",
    marginBottom: 20,
    textAlignVertical: "top", // Align text at the top of the input
  },
  button: {
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    fontWeight: "bold",
    alignItems: "center",
  },
  buttonText: {
    color: "#347AF0",
    fontSize: 16,
  },
});

export default Mnemonic;
