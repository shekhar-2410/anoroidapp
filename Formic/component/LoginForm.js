import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email Required"),
    password: Yup.string().required("Required Password"),
  });
  const handleFormSubmit = (values, { resetForm }) => {
    console.log("Form values:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <View style={styles.loginContainer}>
          <Text style={{ fontSize: 33, fontWeight: "bold", marginTop: 27 }}>
            Welcome
          </Text>
          <Text style={{ fontSize: 21, fontWeight: "500", marginTop: 6 }}>
            to the world of technology
          </Text>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.emailContainer}
              placeholder="Email Address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              secureTextEntry
              style={styles.emailContainer}
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />

            {errors.password && touched.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
          </View>
          <Pressable>
            <Text style={styles.forgotPass}>Forgot Password</Text>
          </Pressable>
          <Pressable style={styles.loginbtn} onPress={handleSubmit}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
              Login
            </Text>
          </Pressable>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            or sign up with
          </Text>
          <View style={styles.ssoContainer}>
            <Pressable>
              <Icon name="facebook" size={30} color="#3b5998" />
            </Pressable>
            <Pressable>
              <Icon name="google" size={30} color="#db4437" />
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 14,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: "100%",
    marginTop: 50,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    elevation: 4,
  },
  label: {
    marginTop: 40,
    fontSize: 21,
    fontWeight: "500",
  },
  emailContainer: {
    marginTop: 20,
    padding: 4,
    borderBottomWidth: 2,
    borderColor: "#852881",
    color: "black",
  },
  forgotPass: {
    textAlign: "right",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  loginbtn: {
    padding: 10,
    backgroundColor: "#852881",
    elevation: 5,
    borderRadius: 16,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 24,
    marginLeft: "25%",
  },
  ssoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 24,
    gap: 28,
  },
});
