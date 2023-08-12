import { StyleSheet } from "react-native";
import React from "react";
import Routes from "./src/routes";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import Clipboard from 'expo-clipboard';
import FlashMessage from "react-native-flash-message";
export default function App() {
  let [fontsLoaded]=useFonts({
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("./src/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Italic": require("./src/assets/fonts/Poppins-Italic.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
  })

if(!fontsLoaded){
  return <AppLoading/>
}
  return <>
  <Routes />
  <FlashMessage position="bottom" icon="auto" />
</>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
