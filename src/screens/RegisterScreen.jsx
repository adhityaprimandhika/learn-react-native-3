import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import NavTitle from "../components/NavTitle";
import RegisterCard from "../components/RegisterCard";
import ScreenBackground from "../components/ScreenBackground";

const RegisterScreen = ({ navigation }) => {
  return (
    <ScreenBackground>
      <NavTitle />
      <RegisterCard />
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({});

export default RegisterScreen;
