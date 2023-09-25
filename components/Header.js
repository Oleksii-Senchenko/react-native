import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>To-do list</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    paddingTop: 60,
    height: 100,
  },
  text: {
    color: "red",
    textAlign: "center",
  },
});

export default Header;
