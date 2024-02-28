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
import { useState, useEffect } from "react";
import { getAccount, getPPOB, getPromo, getTransfer } from "../network/Api";

const HomeScreen = ({ navigation }) => {
  const [account, setAccount] = useState();
  const [menuTransfer, setMenuTransfer] = useState();
  const [menuPPOB, setMenuPPOB] = useState();
  const [promo, setPromo] = useState();

  useEffect(() => {
    const fetchAccount = async () => {
      try {
          const data = await getAccount();
          console.log(data)
          setAccount(data);
      } catch (error) {
        console.error("Error:", error);
      } 
    }

    const fetchTransfer = async () => {
      try {
          const data = await getTransfer();
          console.log(data)
          setMenuTransfer(data);
      } catch (error) {
        console.error("Error:", error);
      } 
    }

    const fetchPPOB = async () => {
      try {
          const data = await getPPOB();
          console.log(data)
          setMenuPPOB(data);
      } catch (error) {
        console.error("Error:", error);
      } 
    }

    const fetchPromo = async () => {
      try {
          const data = await getPromo();
          console.log(data)
          setPromo(data);
      } catch (error) {
        console.error("Error:", error);
      } 
    }

    fetchAccount()
    fetchTransfer()
    fetchPPOB()
    fetchPromo()
  }, [])
  return (
    <ScreenBackground>
      <GreetingCard name={account && account.user.name}/>
      <BalanceCard saldo={account && account.user.balance} list={menuTransfer && menuTransfer.menu} />
      <ListPembayaran list={menuPPOB && menuPPOB.list} />
      <PromoCard list={promo && promo.promos} />
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default HomeScreen;
