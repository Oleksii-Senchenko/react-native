import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const LogButton = ({ onSubmit }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onSubmit}>
      <Text style={styles.btnText}>Зареєстуватися</Text>
    </TouchableOpacity>
  );
};

export default LogButton;
const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 354,

    flexDirection: "column",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
  },
});
