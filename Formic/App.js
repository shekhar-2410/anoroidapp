import { View, StatusBar, StyleSheet } from "react-native";
import BackgroundScreen from "./component/BackgroundScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <BackgroundScreen
        source={require("./assets/background.jpg")}
        Iamge={require("./assets/bird.png")}
        logo={require("./assets/tech.png")}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
