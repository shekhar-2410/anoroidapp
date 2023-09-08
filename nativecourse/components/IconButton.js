import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ onPress }) => {
  return (
    <Pressable style={{marginEnd:20}} onPress={onPress}>
      <Ionicons name="home-outline" size={24} color={"black"} />
    </Pressable>
  );
};

export default IconButton;
