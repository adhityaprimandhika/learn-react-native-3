import { Image, StyleSheet, View, Text } from "react-native";

const NavTitle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <Image
          style={styles.icon}
          source={require("../../assets/icon_back.png")}
        ></Image>
        <Text style={styles.textTitle}>Daftar Baru</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 32,
    marginTop: 60,
    marginBottom: 10,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  textTitle: {
    color: "#ffffff",
    flex: 0.9,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default NavTitle;
