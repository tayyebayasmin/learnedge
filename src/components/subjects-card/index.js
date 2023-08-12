import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { CommonStyles } from "../../utills/CommonStyles";
import { FontFamily } from "../../utills/Fontfamily";
import { CustomText } from "../texts";
import styles from "./styles";
const SubjectCard = ({
  title,
  onPress,
  Icon = () => null,
  color = "red",
  chapters,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.card}>
      <View style={[styles.Icon, { backgroundColor: color }]}>
        <Icon />
      </View>
      <CustomText center size={3.8} font={FontFamily.appFontMedium} textStyles={CommonStyles.marginTop_1}>
        {title}
      </CustomText>
      <CustomText
        center
        size={2.8}
        textStyles={CommonStyles.marginTop_0_5}
        font={FontFamily.appFontLight}
      >
        {chapters} Chapters
      </CustomText>
    </TouchableOpacity>
  );
};
export default SubjectCard;
