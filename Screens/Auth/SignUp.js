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
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [isShowKeyb, setIsShowKeyb] = useState(false);

  const onSubmit = () => {
    console.log("Credentials", `${name}+${mail} + ${pass}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.auth}
          // style={{ ...styles.auth, padding: isShowKeyb ? 20 : 100 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.imagePicker}>
            <ImagePicker />
          </View>

          <Text style={styles.mainText}>Реєстрація</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              keyboardType="default"
              value={name}
              onChangeText={setName}
              onFocus={() => {
                setIsShowKeyb(true);
              }}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType={"email-address"}
              onChangeText={setMail}
              value={mail}
              onFocus={() => {
                setIsShowKeyb(true);
              }}
            />
            <TextInput
              style={{ ...styles.input, ...styles.inputLast }}
              placeholder="Password"
              secureTextEntry={true}
              value={pass}
              onChangeText={setPass}
              onFocus={() => {
                setIsShowKeyb(true);
              }}
            />

            <TouchableOpacity style={styles.showPasswordBtn}>
              <Text style={styles.showPasswordText}>Показати</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.submit} onPress={onSubmit}>
            <Text style={styles.submitText}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  auth: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    justifyContent: "flex-end",
    minHeight: 549,
  },
  imagePicker: {
    position: "absolute",
    top: -60,
    left: "50%",
    marginLeft: -60,
    // marginBottom: 100,
  },
  mainText: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 33,
    lineHeight: 45,
  },
  inputContainer: { marginBottom: 5 },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    padding: 15,
    borderRadius: 8,
  },
  inputLast: {
    marginBottom: 27,
    position: "relative",
  },
  showPasswordBtn: {
    position: "absolute",
    top: 145,
    right: 15,
  },
  showPasswordText: {
    color: "#1B4371",
    textAlign: "right",
    fontSize: 16,
  },
  submit: {
    height: 50,
    width: 354,
    flexDirection: "column",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  submitText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
  },
  linkText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
  },
});

export default SignUp;
