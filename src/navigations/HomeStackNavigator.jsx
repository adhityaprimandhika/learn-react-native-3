import { createStackNavigator } from "@react-navigation/stack";
import HomeTabNavigator from "./HomeTabNavigator";
import RegisterScreen from "../screens/RegisterScreen";
const HomeStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="RegisterStack">
      <Stack.Screen
        name="HomeStack"
        options={{ headerShown: false }}
        component={HomeTabNavigator}
      />
      <Stack.Screen
        name="RegisterStack"
        options={{ headerShown: false }}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
