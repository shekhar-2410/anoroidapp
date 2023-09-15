import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from "react-native";
import Login from "./Login";

export default function App() {
  const [name, setName] = useState("");
  const [isDarkmode, setDarkMode] = useState(false);

  return (
    <SafeAreaView
      style={isDarkmode ? styles.darkContainer : styles.lightContainer}
    >
      <StatusBar style={isDarkmode ? "light" : "dark"} />

      <View style={styles.switchContainer}>
        <Text style={isDarkmode ? styles.darkText : styles.lightText}>
          {isDarkmode ? "Dark Mode" : "Light Mode"}
        </Text>
        <Switch
          value={isDarkmode}
          onValueChange={() => setDarkMode((prevState) => !prevState)}
          trackColor={{ false: "#d2d6d4", true: "#91c959" }}
          thumbColor={"#010f07"}
        />
      </View>

      {/* <Text style={isDarkmode ? styles.darkText : styles.lightText}>
        Enter Email here
      </Text>
      <TextInput
        placeholder="email@example.com"
        style={isDarkmode ? styles.darkInput : styles.lightInput}
        value={name}
        onChangeText={setName} // Use onChangeText instead of onChange
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
      /> */}
      {/* <View>
        <TextInput
          placeholder="message"
          multiline
          style={[
            { minHeight: 100 },
            isDarkmode ? styles.darkInput : styles.lightInput,
          ]}
        />
      </View> */}
      <View>
        <Login style={styles.loginContainer} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: "#fff", // Light mode background color
    paddingTop: StatusBar.currentHeight,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#f536af", // Dark mode background color
    paddingTop: StatusBar.currentHeight,
  },
  lightInput: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "gray", // Light mode input border color
  },
  darkInput: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "white", // Dark mode input border color
    color: "white", // Dark mode text color
  },
  lightText: {
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 14,
    marginTop: 6,
    color: "black", // Light mode text color
  },
  darkText: {
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 14,
    marginTop: 6,
    color: "white", // Dark mode text color
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  loginContainer: {
    marginTop: 20,
  },
});
