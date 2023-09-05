import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../component/PrimaryButton";
import { useState } from "react";

const StartGameScreen = ({ onPickNumber }) => {
  const [change, Setchnge] = useState("");
  const handleChange = (event) => {
    Setchnge(event.nativeEvent.text);
  };
  function ResetInputHandler() {
    Setchnge("");
  }
  function confirmInputHandler() {
    const choosenNumber = parseInt(change);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be in between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: ResetInputHandler },
      ]);
      return;
    }
    onPickNumber(choosenNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.numberinput}
        maxLength={2}
        onChange={handleChange}
        value={change}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.btn_style}>
          <PrimaryButton onPress={ResetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.btn_style}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: "#72063c",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  numberinput: {
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  btn_style: {
    flex: 1,
  },
});
