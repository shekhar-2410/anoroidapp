import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import image from "../assets/welcome.jpg";
function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      {/* Illustration */}
      <Image
        source={require("../assets/welcome.jpg")}
        style={styles.illustration}
      />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>
        Welcome to our <Text style={styles.highlight}>Testing App</Text>
      </Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Background color of the screen
  },
  illustration: {
    width: 200, // Adjust the width as per your illustration's dimensions
    height: 200, // Adjust the height as per your illustration's dimensions
    marginBottom: 20, // Spacing between illustration and text
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333", // Text color
  },
  highlight: {
    color: "#eb1064", // Highlighted text color
  },
});
