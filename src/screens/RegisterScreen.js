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

const RegisterScreen = ({ navigation }) => {
  return (
    // <View>
    //   <Text>Ini adalah Register Screen</Text>
    //   <Button
    //     title={"Home"}
    //     onPress={() => {
    //       navigation.navigate("Home");
    //     }}
    //   />
    // </View>
    <ScrollView>
      <Image
        style={styles.registerBackground}
        source={require("../../assets/background_home.png")}
      ></Image>
      <NavTitle />
      <RegisterCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  registerBackground: {
    position: "absolute",
    paddingTop: 10,
    width: "100%",
  },
});

export default RegisterScreen;
