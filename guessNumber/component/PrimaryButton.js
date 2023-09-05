import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.container, styles.pressed] : styles.container
      }
      onPress={onPress}
    >
      <View>
        <Text style={{ textAlign: "center", color: "black", fontSize: 21 }}>
          {" "}
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBD85D",
    borderRadius: 28,
    paddingHorizontal: 10,
    paddingVertical: 8,
    margin: 4,
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
