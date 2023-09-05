import { Text, View, StyleSheet } from "react-native";

const NumberConatainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberConatainer;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#024514",
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 46,
    color: "#024514",
  },
});
