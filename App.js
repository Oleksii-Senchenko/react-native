import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import image from './image/mountBG.png'
import SignIn from "./components/Auth/SignIn";
export default function App() {
  return (
   <ImageBackground source={image} style={styles.container}>
    <SignIn style={styles.auth}/>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'flex-end'
  },
  auth:{  
  }
});