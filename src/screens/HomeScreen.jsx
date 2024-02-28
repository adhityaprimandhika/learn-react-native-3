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
import ScreenBackground from "../components/ScreenBackground";

const HomeScreen = ({ navigation }) => {
  return (
    <ScreenBackground>
      <GreetingCard name={"Adhitya Primandhika"} />
      <BalanceCard saldo={2000000} />
      <ListPembayaran />
      <PromoCard />
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default HomeScreen;
