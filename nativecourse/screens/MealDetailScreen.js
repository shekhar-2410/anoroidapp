import { useLayoutEffect } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route }) => {
  const navigation = useNavigation();

  const mealId = route.params.mealId;
  const selctedMeal = MEALS.find((meal) => meal.id === mealId);

  function pressHandler() {
    navigation.navigate("MealsCategory"); // Navigate to the "MealsCategory" screen
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={pressHandler} />;
      },
    });
  }, [navigation, pressHandler]);
  return (
    <View style={styles.mealItem}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: selctedMeal.imageUrl }} />
        <Text style={styles.title}>{selctedMeal?.title}</Text>
        <View>
          <Text>
            <Ionicons name="md-time" size={16} color="black" />
            {" " + selctedMeal.duration}
          </Text>
          <Text>
            <Ionicons name="md-pulse" size={16} color="black" />
            {" " + selctedMeal.complexity}
          </Text>
          <Text>
            <Ionicons name="md-cash" size={16} color="black" />
            {" " + selctedMeal.affordability}
          </Text>
          <Text style={styles.ingred}>Ingredients</Text>
          {selctedMeal?.ingredients.map((ingredient, index) => (
            <Text key={index}>
              <Ionicons name="md-checkmark" size={16} color="black" />{" "}
              {ingredient}
            </Text>
          ))}
          <Text style={styles.ingred}>Steps</Text>
          {selctedMeal?.steps.map((step, index) => (
            <Text key={index}>{step}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetailScreen;
const styles = StyleSheet.create({
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
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 21,
    marginTop: 2,
  },
  ingred: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});
