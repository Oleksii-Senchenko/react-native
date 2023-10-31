import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "./Screens/Auth/SignUp";
import Login from "./Screens/Auth/SignIn";
import Home from "./components/Home/Home";
import PostsScreen from "./components/PostsScreen/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import CreatePostsScreen from "./components/CreatePostsScreen/CreatePostsScreen";

export default function App() {
  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Register">
      {/* <MainStack.Navigator initialRouteName="Home"> */}
      {/* <MainStack.Navigator initialRouteName="Login"> */}
        <MainStack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        ></MainStack.Screen>
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        ></MainStack.Screen>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        ></MainStack.Screen>
        <MainStack.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{ headerShown: false }}
        ></MainStack.Screen>
        <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        ></MainStack.Screen>
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{ headerShown: false }}
        ></MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
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
