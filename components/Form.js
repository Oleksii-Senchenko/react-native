import React, { useState } from "react";
import { TextInput, Button, StyleSheet, Text, View } from "react-native";

const Form = () => {
  const [value, setValue] = useState("");

  const onchange = (text) => {
    setValue(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onchange}
        placeholder="Input task..."
      />
      <Button color='green' title="Add task" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
  },
  
});

export default Form;
