import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../constatnts/styles";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flatstle]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatstle]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    backgroundColor: "white",
    padding: 6,
    elevation: 4,
    fontSize:16
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    color:"black"
  },
  flatstle: {
    color: GlobalStyles.colors.primary100,
    backgroundColor: "transparent",
    elevation: 0,
    fontWeight:"bold",
    fontSize:16
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
