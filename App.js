import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import image from "./image/mountBG.png";
import SignUp from "./Screens/Auth/SignUp";
// import SignIn from "./Screens/Auth/SignIn";
// import Qwe from "./Screens/Auth/qew";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.immageContainer}>
        <SignUp />
        {/* <Qwe/> */}
        {/* <SignIn /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  immageContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
