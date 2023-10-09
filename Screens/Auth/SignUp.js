import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = () => {
  return (
    <View style={styles.auth}>
      <Text style={styles.mainText}>Реєстрація</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={{ ...styles.input, ...styles.inputLast }}
        placeholder="Password"
      />
      <TouchableOpacity style={styles.buton}>
        <Text style={styles.btnText}>Зареєстуватися</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
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
    marginBottom: 27,
  },

  buton: {
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
  linkText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
  },
});

export default SignUp;
