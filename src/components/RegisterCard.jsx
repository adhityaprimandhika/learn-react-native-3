import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { isValidNumberTelepon, validation } from "../utils/Validation";
import { Ionicons } from "@expo/vector-icons";

const RegisterCard = () => {
  const [otp, setOtp] = useState("");
  const [isValid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [checked, setChecked] = useState(false);

  function MyCheckbox() {
    return (
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={() => {
          setChecked(!checked);
        }}
      >
        {checked && <Ionicons name="checkmark" size={24} color="white" />}
      </Pressable>
    );
  }

  const navigation = useNavigation();

  const handleInputChange = (phone_num) => {
    setOtp(phone_num);
    const phoneNumberRegex = isValidNumberTelepon(phone_num);

    if (phoneNumberRegex) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      setChecked(true);
      const validationResult = await validation(otp, checked);
      if (validationResult) {
        setValid(true);
        setResult(validationResult);
        navigation.navigate("HomeStack");
      } else {
        setValid(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.card}>
      <Text style={styles.textTitle}>Assalamualaikum</Text>
      <Text style={styles.textSubTitle}>Selamat datang di Syariah</Text>
      <Image
        style={styles.illustration}
        source={require("../../assets/illustration_register.png")}
      />
      <Text style={styles.textSubTitle}>
        Mohon masukkan nomor telepon Anda, kami akan mengirimkan kode OTP ke
        nomor Anda melalui Whatsapp/SMS
      </Text>
      <Text style={styles.textLabel}>Nomor Telepon</Text>
      <TextInput
        style={styles.textInput}
        placeholder={"Phone Number"}
        keyboardType="numeric"
        onChangeText={(phone_num) => handleInputChange(phone_num)}
      ></TextInput>
      {!isValid && (
        <Text style={styles.validation}>Nomor yang anda masukkan valid</Text>
      )}
      <Text style={styles.textSubTitle}>Contoh: 081234567890</Text>
      <View style={styles.checkboxContainer}>
        <MyCheckbox />
        <Text style={styles.textSubTitle}>
          Saya telah menyetujui data pribadi saya dikelola oleh PT Solusi Pasti
          Indonesia dan partner yang bekerja sama dengan PT Solusi Pasti
          Indonesia untuk tujuan yang telah disebutkan di dalam{" "}
          <Text style={styles.textBold}>Kebijakan Privasi Syariah</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={styles.buttonOTP}
        onPress={handleClick}
        disabled={loading}
      >
        <Text style={styles.buttonLabel}>Kirim OTP</Text>
      </TouchableOpacity>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}

      <View style={styles.horizontal}>
        <Text style={styles.textSubTitle}>Sudah punya akun Syariah?</Text>
        <TouchableOpacity>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginTop: 8,
    borderRadius: 20,
    height: "100%",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#39B54A",
    padding: 8,
  },
  textSubTitle: {
    color: "#00373E",
    fontWeight: "400",
    fontSize: 14,
    paddingHorizontal: 16,
    paddingTop: 12,
    textAlign: "justify",
  },
  illustration: {
    marginBottom: 18,
  },
  textLabel: {
    color: "#00373E",
    fontWeight: "bold",
    fontSize: 12,
    paddingHorizontal: 16,
    marginBottom: 4,
    marginTop: 4,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 2,
    padding: 2,
    marginHorizontal: 16,
    paddingHorizontal: 4,
  },
  buttonOTP: {
    backgroundColor: "#852884",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 10,
    marginTop: 24,
  },
  buttonLabel: {
    color: "#ffffff",
  },
  validation: {
    color: "red",
    paddingHorizontal: 16,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    position: "absolute",
    marginTop: 300,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#852884",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#852884",
  },
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 40,
  },
  textBold: {
    color: "#852884",
    fontWeight: "bold",
  },
  textLogin: {
    color: "#852884",
    fontWeight: "bold",
    fontSize: 14,
    paddingHorizontal: 36,
    paddingTop: 12,
    flex: 1,
  },
});

export default RegisterCard;
