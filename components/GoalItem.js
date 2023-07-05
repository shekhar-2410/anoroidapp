import { StyleSheet, View, Text, Pressable, Image } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <View style={styles.setIcon}>
        <Text style={{ color: "black", fontSize: 24 }}>{props.text}</Text>
        <Pressable
          android_ripple={{ color: "orange" }}
          onPress={props.DeleteItem.bind(this, props.id)}
        >
          <Image
            style={{ height: 20, width: 20, marginTop: 4 }}
            source={require("../assets/images/delete.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginTop: 24,
    borderRadius: 6,
    backgroundColor: "#ECFFDC",
    padding: 8,
    borderWidth: 1,
    borderColor: "#2E8B57",
  },
  setIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});
export default GoalItem;
