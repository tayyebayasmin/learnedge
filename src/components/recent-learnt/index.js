import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Play } from "../../assets/SVG";
import AppColors from "../../utills/AppColors";
import { CommonStyles } from "../../utills/CommonStyles";
import { FontFamily } from "../../utills/Fontfamily";
import { CustomText } from "../texts";
import { CircularPercentageWithIcon } from "./percentage";
import styles from "./styles";
const RecentLearnedCard = ({
  title,
  onPress,
  Icon = () => null,
  color = "red",
  time,
  back,
  percentage
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.card, { backgroundColor: back }]}
    >
      <View style={CommonStyles.rowAlignJustifyCenter}>
        <View style={[styles.Icon, { backgroundColor: color }]}>
          <Icon />
        </View>
        <View style={CommonStyles.paddingLeft_2}>
          <CustomText left size={3.8}
          font={FontFamily.appFontMedium}>
            {title}
          </CustomText>
          <CustomText
            left
            size={3}
            font={FontFamily.appFontRegular}
            textStyles={CommonStyles.marginTop_0_5}
            color={AppColors.grey30}
          >
            {time}
          </CustomText>
        </View>
      </View>
      <View>
        <CircularPercentageWithIcon percentage={percentage} Icon={Play} color={color}/>
      </View>
    </TouchableOpacity>
  );
};
export default RecentLearnedCard;
