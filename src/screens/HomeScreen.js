import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import GreetingCard from "../components/GreetingCard";
import BalanceCard from "../components/BalanceCard";
import ListPembayaran from "../components/ListPembayaran";
import PromoCard from "../components/PromoCard";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Image
        style={styles.homeBackground}
        source={require("../../assets/background_home.png")}
      ></Image>
      {/* <Text>Ini adalah Home Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate("Register")}
      /> */}
      <GreetingCard name={"Adhitya Primandhika"} />
      <BalanceCard saldo={2000000} />
      <ListPembayaran />
      <PromoCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  homeBackground: {
    position: "absolute",
    paddingTop: 10,
    width: "100%",
  },
});

export default HomeScreen;
