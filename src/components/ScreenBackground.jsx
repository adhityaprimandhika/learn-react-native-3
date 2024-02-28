import { ScrollView, StyleSheet, Image } from "react-native";

const ScreenBackground = ({ children }) => {
  return (
    <ScrollView>
      <Image
        style={styles.backgroundStyle}
        source={require("../../assets/background_home.png")}
      ></Image>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    position: "absolute",
    paddingTop: 10,
    width: "100%",
  },
});

export default ScreenBackground;
