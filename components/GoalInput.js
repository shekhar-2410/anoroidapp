import {
  TextInput,
  View,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";
const GoalInput = (props) => {
  const [enterGoalText, setEnterGoalText] = useState("");

  function goalInputHandler(enterText) {
    setEnterGoalText(enterText);
  }

  function addGoalHandler() {
    props.onAddGoal(enterGoalText), setEnterGoalText("");
  }
  return (
   
      <Modal visible={props.visible} animationType="slide">
      
        <View style={styles.inputContainer}>
        
          <View>
          <Image
            style={{ height: 150, width: 150,  marginLeft: 20 }}
            source={require("../assets/images/myproject.png")}
          />
          </View>
         
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal!"
            onChangeText={goalInputHandler}
            value={enterGoalText} // Add this line to bind the input field value to the state
          />
          <View style={styles.buttonstyle}>
            <View style={styles.buttondes}>
              {/* <Button title="Add Goals" onPress={addGoalHandler} /> */}
              <TouchableOpacity onPress={addGoalHandler}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 600,
                    marginTop: 6,
                  }}
                >
                  {"Add Goals"}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttondes}>
              {/* <Button title="Cancel" onPress={props.onCancel} /> */}
              <TouchableOpacity onPress={props.onCancel}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: 600,
                    marginTop: 6,
                  }}
                >
                  {"Cancel"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
   
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "#FFC300",
    height:"100%",
    marginTop:200
   
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#2E8B57",
    width: "90%",
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  buttonstyle: {
    flexDirection: "row",
    gap: 4,
    marginTop: 10,
    maxWidth: 201,
    paddingRight: 225,
  },
  buttondes: {
    backgroundColor: "#2E8B57",
    color: "black",
    width: 120,
    height: 40,
    borderRadius: 4,
    marginTop: 8,
  },
});

export default GoalInput;
