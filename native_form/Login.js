import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
const Login = ({ style }) => {
  const [userName, setuserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const validateForm = () => {
    let error = {};
    if (!userName) error.userName = "username is required";
    if (!password) error.password = "password is required";
    setError(error);
    return Object.keys(error).length === 0;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", userName, password);
      setuserName("");
      setPassword("");
      setError({});
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding">
      <Text style={styles.title}>Login</Text>
      <View style={style}>
        <View style={styles.formStyle}>
          <Text style={styles.label}>UserName</Text>
          {error.userName ? (
            <Text style={styles.errorText}>{error.userName}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={userName}
            onChangeText={setuserName}
          />
          <Text style={styles.label}>Password</Text>
          {error.password ? (
            <Text style={styles.errorText}>{error.password}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button
            title="Login"
            onPress={() => {
              handleSubmit()
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 21,
    marginLeft: 15,
    marginTop: 70,
  },
  formStyle: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    elevation: 8,
    width: "95%",
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 2,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
  },
});
