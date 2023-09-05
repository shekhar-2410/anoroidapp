import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tittle = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default Tittle;
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#024514",
    borderWidth: 2,
    borderColor: "#024514",
    padding: 6,
    borderRadius: 6,
  },
});
