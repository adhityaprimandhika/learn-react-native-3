import { Image, StyleSheet, Text, View } from "react-native";

const GreetingCard = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <View>
          <Text style={styles.textGreeting}>Assalamualaikum</Text>
          <Text style={styles.textName}>{name}</Text>
        </View>
        <Image
          style={styles.icon}
          source={require("../../assets/icon_notification.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  container: {
    padding: 32,
    marginTop: 45,
  },
  icon: {
    width: 24,
    height: 24,
  },
  textGreeting: {
    fontSize: 14,
    fontWeight: "400",
    color: "#ffffff",
  },
  textName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 8,
  },
});

export default GreetingCard;
