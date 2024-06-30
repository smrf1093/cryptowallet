import { useEffect } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { CustomizedText, CustomizedButton } from "@/components/atoms";
import { useTheme } from "@/theme";
import { Brand } from "@/components/molecules";
import { SafeScreen } from "@/components/template";

import type { RootScreenProps } from "@/types/navigation";

function Startup({ navigation }: RootScreenProps<"Startup">) {
  const { layout, gutters, fonts } = useTheme();
  const { t } = useTranslation(["startup"]);

  const { isSuccess, isFetching, isError } = useQuery({
    queryKey: ["startup"],
    queryFn: () => {
      return Promise.resolve(true);
    },
  });

  const handleMainNavigate = () => {
    navigation.navigate("MainTab");
  };
  const handleMnemonicNavigate = () => {
    navigation.navigate("Mnemonic");
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Brand />

        <CustomizedText bold={true} style={styles.text}>
          Welcome to CryptoWallet
        </CustomizedText>

        <CustomizedButton
          onPress={handleMainNavigate}
          title="Create Account"
          bold
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
        
        <TouchableOpacity onPress={handleMnemonicNavigate} style={styles.importContainer}>
          <Text style={styles.importText}>Import</Text>
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
  },
  text: {
    color: "white",
    fontSize: 16,
    marginVertical: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 70, // Adjusted to make room for the import text
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    color: "#347AF0",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    fontWeight: "bold",
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    color: "#347AF0",
    fontSize: 16,
  },
  importContainer: {
    position: "absolute",
    bottom: 30, // Position the import text below the button
    alignItems: "center",
  },
  importText: {
    color: "white",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default Startup;
