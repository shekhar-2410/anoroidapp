import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screen/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screen/GameScreen";
export default function App() {
  const [userNumber, setuserNumber] = useState();

  const pickedNumber = (pikedNumber) => {
    setuserNumber(pikedNumber);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumber} />;
  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    // <View style={styles.container}>
    <LinearGradient colors={["#fff", "#401922"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
