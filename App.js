import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HistoryScreen from "./src/screens/HistoryScreen";
import InboxScreen from "./src/screens/InboxScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeStackNavigator from "./src/navigations/HomeStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}
