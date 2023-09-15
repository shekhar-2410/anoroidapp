import { StyleSheet, View, ImageBackground, Image } from "react-native";
import LoginForm from "./LoginForm";

const BackgroundScreen = ({ source, Iamge, logo }) => {
  return (
    <ImageBackground source={source} style={styles.backgroundImage}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Iamge} />
        <Image source={logo} />
        <LoginForm />
      </View>
    </ImageBackground>
  );
};
export default BackgroundScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 100,
  },
  text: {
    fontSize: 33,
    color: "white",
    fontWeight: "bold",
    marginTop: 6,
  },
});
