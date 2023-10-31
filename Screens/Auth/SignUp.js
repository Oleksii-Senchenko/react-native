import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { launchImageLibraryAsync } from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import image from "../../image/mountBG.png";

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [show, setShow] = useState(false);

  const showKeyboard = () => {
    setShow(true);
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
    setShow(false);
  };

  const addPhoto = async () => {
    const result = await launchImageLibraryAsync();

    if (result.assets) {
      setAvatar(result.assets[0].uri);
    }
  };

  const deletePhoto = () => {
    setAvatar(null);
  };

  const handleSubmit = () => {
    if (!name || !email || !pass) {
      alert("Input all filed");
      return
    }
    navigation.navigate("Home", {
      avatar: avatar,
      name: name,
      login: email,
    });
  };

  return (
    <ImageBackground source={image} style={styles.imageContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={hideKeyboard}>
          <View
            style={{
              ...styles.contentContainer,
              marginBottom: show ? -150 : 0,
            }}
          >
            <View style={styles.avatar}>
              {avatar ? (
                <View style={styles.avatarContainer}>
                  <Image source={{ uri: avatar }} style={styles.avatarImage} />
                  <TouchableOpacity
                    onPress={deletePhoto}
                    style={styles.iconContainer}
                  >
                    <AntDesign
                      name="closecircleo"
                      color="black"
                      style={styles.closeIcon}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.grayBackground}>
                  <TouchableOpacity
                    onPress={addPhoto}
                    style={styles.iconContainer}
                  >
                    <AntDesign
                      name="pluscircleo"
                      color="black"
                      style={styles.addIcon}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View style={styles.view}>
              <Text style={styles.mainText}>Реєстрація</Text>

              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  onFocus={showKeyboard}
                  onChangeText={(text) => {
                    setName(text);
                  }}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onFocus={showKeyboard}
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                />
                <TextInput
                  style={{ ...styles.input, ...styles.lastInput }}
                  placeholder="Password"
                  secureTextEntry={true}
                  onFocus={showKeyboard}
                  onChangeText={(text) => {
                    setPass(text);
                  }}
                />
                <TouchableOpacity style={styles.showPasswordBtn}>
                  <Text style={styles.showPasswordText}>Показати</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                  <Text style={styles.submitText}>Зареєстуватися</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  contentContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-end",
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    height: 549,
  },
  avatar: {
    position: "absolute",
    left: "50%",
    marginLeft: -60,
    top: -60,
  },
  avatarContainer: {
    borderRadius: 16,
    resizeMode: "cover",
  },
  grayBackground: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    position: "absolute",
    bottom: 12,
    right: -12,
  },
  addIcon: {
    fontSize: 24,
    color: "orange",
  },
  closeIcon: {
    fontSize: 24,
    color: "#BDBDBD",
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  view: {
    alignItems: "center",
  },
  form: {
    alignItems: "center",
    marginBottom: 78,
  },
  mainText: {
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0.3,
    color: "black",
    fontSize: 30,
    marginBottom: 33,
  },
  input: {
    width: 343,
    height: 50,
    flexShrink: 0,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 100,
    borderRadius: 10,
  },
  lastInput: {
    marginBottom: 43,
  },
  showPasswordBtn: {
    position: "absolute",
    top: 147,
    right: 15,
  },
  showPasswordText: {
    color: "#1B4371",
    textAlign: "right",
    fontSize: 16,
  },
  submit: {
    flexDirection: "column",
    width: 343,
    padding: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  submitText: {
    color: "white",
    fontSize: 16,
  },
  linkText: {
    fontSize: 16,
  },
});

export default SignUp;
