import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, StyleSheet, FlatList } from "react-native";
import { useEffect } from "react";
const MealOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMeals(itemData) {
    // function pressHandler() {
    //   navigation.navigate("MealDetails", {
    //     categoryId: itemData.item.id,
    //   });
    // }
    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexitity={itemData.item.complexity}
        affordibility={itemData.item.affordability}
        // onPress={pressHandler}
      />
    );
  }
  return (
    <View>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default MealOverviewScreen;

const style = StyleSheet.create({});
