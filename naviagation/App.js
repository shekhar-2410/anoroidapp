import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import Album from "./screens/Album";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "./screens/ChatScreen";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "#f5bc42",
      }}
    >
      <Tab.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarLabel: "Welcome",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: "Chat Here",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-chatbubbles" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Album"
        component={Album}
        options={{
          tabBarLabel: "Album",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-albums" size={24} color={color} />
          ),
        }}
      />
      {/* Add more bottom tab screens here */}
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#f5bc42" },
          headerTintColor: "white",
          drawerLabel: "Welcome Screen",
          drawerActiveBackgroundColor: "#fae9c5",
          drawerActiveTintColor: "#330431",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{
            drawerLabel: "Welcome screen",
            drawerIcon: ({ color }) => (
              <Ionicons name="md-home" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerLabel: "User screen",
            drawerIcon: ({ color }) => (
              <Ionicons name="md-person" size={24} color={color} />
            ),
          }}
        />
        {/* Add more screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
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
