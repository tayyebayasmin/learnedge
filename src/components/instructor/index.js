import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { CommonStyles } from "../../utills/CommonStyles";
import { FontFamily } from "../../utills/Fontfamily";
import { CustomText } from "../texts";
import styles from "./styles";
const Instructor = ({ name,onPress, source }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.card}>
      <Image source={source} resizeMode={'contain'} />
      <CustomText 
      center 
      size={3.5}
      font={FontFamily.appFontMedium}
      >{name}</CustomText>
    </TouchableOpacity>
  );
};
export default Instructor;
