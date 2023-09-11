import { View, Text, StyleSheet } from "react-native";

function ChatScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Album"</Text> screen!
      </Text>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
  },
});
