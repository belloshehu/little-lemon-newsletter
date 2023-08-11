import { Text, View, Image, StyleSheet, Pressable } from "react-native";

export const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/logo-brand-yellow.png")}
        style={styles.logo}
      />
      <Text style={styles.info}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
    </View>
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("Subscription")}>
      <Text style={styles.buttonText}>Newsletter</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  logoContainer: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    paddingHorizontal: 10,
  },
  info: {
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#495E57",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
