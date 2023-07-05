import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);
  function startAddGoalHandler() {
    setmodalVisible(true);
  }
  function endAddGoalHandler() {
    setmodalVisible(false);
  }
  function addGoalHandler(goal) {
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      { text: goal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  const DeleteHandler = (id) => {
    setCourseGoal((currentGoals) => {
      return currentGoals.filter((goals) => goals.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 200, width: 200, marginTop: 4, marginLeft: 80 }}
        source={require("./assets/images/goal.jpg")}
      />
      <View style={styles.buttondes}>
        <TouchableOpacity style={styles.button} onPress={startAddGoalHandler}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 600,
              marginTop: 6,
            }}
          >
            {"Add new goal"}
          </Text>
        </TouchableOpacity>
      </View>
      {modalVisible && (
        <GoalInput
          visible={modalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
      )}

      <View>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              DeleteItem={DeleteHandler}
              id={itemData.item.id}
            />
          )}
          keyExtractor={(item) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginTop: 200,
    
  },
  buttondes: {
    backgroundColor: "#2E8B57",
    color: "black",
    width: 160,
    height: 40,
    borderRadius: 4,
    marginLeft: 100,
    marginTop: 8,
  },
});
