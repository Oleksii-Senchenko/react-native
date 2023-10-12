import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import image from "./image/mountBG.png";
import SignUp from "./Screens/Auth/SignUp";
// import SignIn from "./Screens/Auth/SignIn";

import * as ImagePicker from "expo-image-picker";
import  Constants  from "expo-constants";

export default function App() {
  return (
    <ImageBackground source={image} style={styles.container}>
      <SignUp />
      {/* <SignIn /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
});
