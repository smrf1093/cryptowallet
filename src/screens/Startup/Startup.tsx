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

  const handleNavigate = () => {
    navigation.navigate("Main");
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Brand />

        <CustomizedText bold={true} style={styles.text}>
          Welcome to CryptoWallet
        </CustomizedText>

        <CustomizedButton
          onPress={handleNavigate}
          title="Create Account"
          bold
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
        />
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#347AF0", // Replace with your desired background color
    alignItems: "center",
    // justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 16,
    marginVertical: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
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
});

export default Startup;
