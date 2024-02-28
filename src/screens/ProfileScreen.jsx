import { Text, View } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View
      style={{
        paddingTop: 60,
        paddingHorizontal: 16,
        alignItems: "center",
      }}
    >
      <Text>Ini adalah ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
