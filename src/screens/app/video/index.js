import React from "react";
import { Button, Text, View, Image, ScrollView } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import styles from "./styles";
import { height, width } from "../../../utills/Dimension";

const Video = ({ navigation }) => {
  return (
    <ScreenWrapper
      barStyle="dark-content"
      statusBarColor="white"
      scrollType="scroll"
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
      }}
    >
      <View style={{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        height:height(100)
      }}>
      <Text style={{
        fontSize:width(6)
      }}>Coming Soon</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Video;
