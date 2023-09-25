import React from "react";
import { TouchableHighlight, StyleSheet, Text } from "react-native";

const ListItem = ({ item }) => {
  return (
    <TouchableHighlight>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "orange",
    borderWidth: 1,
    marginTop: 20,
    overflow: "hidden",
    width: "60%",
    marginLeft: '20%',
  },
});

export default ListItem;
