import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LogButton from "../../components/Button/LogButton";
import ImagePicker from "../../components/ImagePicker/ImagePicker";

const SignUp = () => {
  return (
    <View style={styles.auth}>
      <View style={styles.imagePicker}>
        <ImagePicker />
      </View>

      <Text style={styles.mainText}>Реєстрація</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={{ ...styles.input, ...styles.inputLast }}
          placeholder="Password"
        />

        <TouchableOpacity style={styles.showPasswordBtn}>
          <Text style={styles.showPasswordText}>Показати</Text>
        </TouchableOpacity>
      </View>

      <LogButton />

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

  imagePicker: {
    position: "absolute",
    top: -60,
    left: "50%",
    marginLeft: -60,
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
  linkText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
  },
});

export default SignUp;
