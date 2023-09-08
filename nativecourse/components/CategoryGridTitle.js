import { View, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
const CategoryGridTitle = ({ title, color, onPress }) => {
  const navigation = useNavigation();
  return (
    <View
      style={[styles.gridItem, { backgroundColor: color, borderColor: color }]}
    >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed ? styles.buttonPresssed : null,
        ]}
        onPress={onPress}
        // onPress={() => {
        //   // Use the navigation prop to navigate to "MealsOverview" screen.
        //   navigation.navigate("MealsOverview");
        // }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#ffebd6",
    elevation: 8,
    overflow: "hidden",
  },
  buttonStyle: {
    flex: 1,
  },
  buttonPresssed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
