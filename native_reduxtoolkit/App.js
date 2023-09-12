import { SafeAreaView, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import DefaultApp from "./component/DefaultApp";
export default function App() {
  return (
    <Provider store={store}>
      <DefaultApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
