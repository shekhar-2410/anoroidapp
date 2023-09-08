import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
const MealItem = ({
  id,
  title,
  imageUrl,
  complexitity,
  affordibility,
  duration,
}) => {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{ color: "#ccc" }}
      >
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={{ textAlign: "center" }}>
            <Ionicons name="md-time" size={16} color="black" />
            {`${" "}${duration}`}
          </Text>
          <Text style={{ textAlign: "center" }}>
            <Ionicons name="md-pulse" size={16} color="black" />
            {`  ${" "}${complexitity.toUpperCase()}`}
          </Text>
          <Text style={{ textAlign: "center" }}>
            <Ionicons name="md-cash" size={16} color="black" />
            {`  ${" "}${affordibility.toUpperCase()}`}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 21,
    marginTop: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    textAlign: "center",
    padding: 12,
    fontSize: 14,
    elevation: 4,
  },
});
