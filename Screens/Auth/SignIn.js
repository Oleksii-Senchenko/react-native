import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import { useState } from "react";
const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [show, setShow] = useState(false);

  const showKeyboard = () => {
    setShow(true);
  };
  const hideKeyboard = () => {
    Keyboard.dismiss();
    setShow(false);
  };



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
        <View
          style={{
            ...styles.contentContainer,
            marginBottom: show ? -150 : 0,
          }}
        >
          <View style={styles.avatar}>
            <ImagePicker />
          </View>
          <View style={styles.view}>
            <Text style={styles.mainText}>Увійти</Text>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onFocus={() => showKeyboard()}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                style={{ ...styles.input, ...styles.lastInput }}
                placeholder="Password"
                secureTextEntry={true}
                onFocus={() => showKeyboard()}
                onChangeText={(text) => setPass(text)}
              />
              <TouchableOpacity style={styles.showPasswordBtn}>
                <Text style={styles.showPasswordText}>Показати</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.submit}>
                <Text style={styles.submitText}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.linkText}>
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
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
    height: 489,
  },
  avatar: {
    position: "absolute",
    left: "50%",
    marginLeft: -60,
    top: -60,
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
    top: 80,
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
