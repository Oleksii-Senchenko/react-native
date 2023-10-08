import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const SignIn = () => {
  return (
    <View style={styles.auth}>
        <Text style={styles.mainText}>Реєстрація</Text>
      <TextInput style={styles.input} placeholder="Name"  />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
    </View>
  );
};

const styles = StyleSheet.create({
  auth: {
    backgroundColor: "white",
    width:'100%',
    height: 549,
    alignItems: 'center',
    borderTopLeftRadius:'35%',
    borderTopRightRadius:'35%',
    justifyContent:'center'

  },
  mainText:{
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom:33,
    lineHeight: 'normal'
  },
  input:{
    width: 343,
    height: 50,
    backgroundColor: '#F6F6F6', 
    borderWidth: 1,
    borderColor: '#E8E8E8', 
    marginBottom: 16,
    padding:15,
  }
});

export default SignIn;
