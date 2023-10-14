import { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const SignIn = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = () => {
    console.log("Credentials", `${mail} + ${pass}`);
  };

  return (
    <View style={styles.auth}>
      <Text style={styles.mainText}>Увійти</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setMail}
          value={mail}
        />

        <TextInput
          style={{ ...styles.input, ...styles.inputLast }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPass}
          value={pass}
        />
        <TouchableOpacity style={styles.showPasswordBtn}>
          <Text style={styles.showPasswordText}>Показати</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submit} onPress={onSubmit}>
        <Text style={styles.submitText}>Увійти</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.linkText}>Немає акаунту? Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  auth: {
    backgroundColor: "white",
    width: "100%",
    height: 549,
    alignItems: "center",
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    justifyContent: "center",
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
    marginBottom: 43,
    position: "relative",
  },
  showPasswordBtn: {
    position: "absolute",
    top: 79,
    right: 15,
  },
  showPasswordText: {
    color: "#1B4371",
    textAlign: "right",
    fontSize: 16,
  },

  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  btnText: {
    paddingVertical: 16,
    paddingHorizontal: 130,
    color: "white",
    textAlign: "center",
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

export default SignIn;
