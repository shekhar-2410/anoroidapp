import { Text, View, StyleSheet, Alert } from "react-native";
import Tittle from "../component/Tittle";
import { useEffect, useState } from "react";
import NumberConatainer from "../component/NumberConatainer";
import PrimaryButton from "../component/PrimaryButton";

function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min; // Added parentheses and +1 to include the 'max' value
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

const GameScreen = ({ change, onGaneOver }) => {
  const initialNumber = generateRandomNumber(1, 100, change);
  const [currentGuess, setcurrentGuess] = useState(initialNumber);

  useEffect(() => {
    if (currentGuess === change) {
      onGaneOver();
    }
  }, [currentGuess, change, onGaneOver]);
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < change) ||
      (direction === "greater" && currentGuess > change)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...");
    }
    if (direction === "lower" && currentGuess < change) {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
      const newRandomNumber = generateRandomNumber(
        minBoundry,
        maxBoundry,
        currentGuess
      );
      setcurrentGuess(newRandomNumber);
    }
  }
  return (
    <View style={styles.screen}>
      <View>
        <Tittle title={"Opponent's Guess!"} />
        <NumberConatainer>{currentGuess}</NumberConatainer>
      </View>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -{" "}
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +{" "}
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
});
