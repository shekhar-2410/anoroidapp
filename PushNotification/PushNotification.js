import React, { useEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Notifications } from "expo";

export default function PushNotification() {
 
  useEffect(() => {
    registerForPushNotificationsAsync();
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification received:", notification);
      }
    );

    return () => {
      // Remove the notification listener when the component unmounts
      subscription.remove();
    };
  }, []);

  // Function to request notification permissions
  async function registerForPushNotificationsAsync() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Notification permissions denied!");
      return;
    }

    // Get the device's push token
    const token = (await Notifications.getExpoPushTokenAsync()).data;

    // Log the token to the console
    console.log("Expo Push Token:", token);
  }

  // Function to trigger a test notification
  async function sendTestNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Test Notification",
        body: "This is a test notification.",
      },
      trigger: { seconds: 2 }, // Show the notification after 2 seconds
    });
  }

  return (
    <View style={styles.container}>
      <Text>Push Notification Example</Text>
      <Button onPress={sendTestNotification} title="Send Test Notification" />
    </View>
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
