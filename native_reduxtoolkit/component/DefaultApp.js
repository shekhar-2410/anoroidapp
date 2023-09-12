import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductSlice";

const DefaultApp = () => {
  const dispatch = useDispatch();
  const { data, isLoader, isError } = useSelector((state) => state.product);

  const handleFetchData = () => {
    dispatch(fetchProducts());
  };

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          fontSize: 21,
          fontWeight: "bold",
        }}
      >
        Redux Api Example
      </Text>
      <Pressable style={styles.button} onPress={handleFetchData}>
        <Text>Fetch user data</Text>
      </Pressable>
      <ScrollView style={{ marginBottom: 200 }}>
        {isLoader ? (
          <ActivityIndicator
            size="large"
            color="#f5bc42"
            style={styles.loader}
          />
        ) : isError ? (
          <Text style={styles.errorText}>Something went wrong.</Text>
        ) : data && data.length > 0 ? (
          data.map((item) => (
            <View key={item.id} style={styles.dataContainer}>
              <Text>First Name: {item.firstName}</Text>
              <Text>Last Name: {item.lastName}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Contact Number: {item.contactNumber}</Text>
              <Text>Age: {item.age}</Text>
              <Text>Date of Birth: {item.dob}</Text>
              <Text>Salary: {item.salary}</Text>
              <Text>Address: {item.address}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.errorText}>No data available.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: "red",
    marginTop: 20,
    textAlign: "center",
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
    elevation: 4,
  },
});

export default DefaultApp;
