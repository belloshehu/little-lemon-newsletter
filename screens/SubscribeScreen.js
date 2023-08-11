import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { validateEmail } from "../utils";

export const SubscribeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const isValidEmail = validateEmail(email);
  const handleSubscription = () => {
    if (validateEmail(email)) {
      Alert.alert("Thanks for subscribing. Stay tune!");
      setEmail("");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.logo}
      />
      <Text style={styles.info}>
        Subscribe to our newsletter for our latest delicious recipes
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Type your email"
        onChangeText={setEmail}
        value={email}
      />
      <Pressable
        style={[
          styles.button,
          isValidEmail
            ? { backgroundColor: "#495E57" }
            : { backgroundColor: "#cccccc" },
        ]}
        onPress={handleSubscription}
        disabled={!isValidEmail}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    width: "100%",
    padding: 20,
    gap: 25,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  info: {
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  input: {
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 5,
    paddingHorizontal: 20,
    width: "100%",
  },
});
