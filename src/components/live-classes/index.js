import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Icons } from "../../assets/images";
import AppColors from "../../utills/AppColors";
import { CommonStyles } from "../../utills/CommonStyles";
import { width } from "../../utills/Dimension";
import { FontFamily } from "../../utills/Fontfamily";
import { CustomText } from "../texts";
import styles from "./styles";
const LiveClasses = ({ title, onPress, time, source, name, rating }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.card}>
      <View style={CommonStyles.rowAlignJustifyCenter}>
        <Image resizeMode="contain" source={source} />
        <View style={CommonStyles.paddingLeft_4}>
          <View style={CommonStyles.rowAlignJustifyCenter}>
            <Image resizeMode="contain" source={Icons.star} />
            <CustomText
              size={3.5}
              textStyles={CommonStyles.marginLeft_1}
              font={FontFamily.appFontLight}
            >
              {rating}
            </CustomText>
          </View>
          <CustomText left size={4} font={FontFamily.appFontMedium}>
            {title}
          </CustomText>
          <CustomText
            left
            size={3.4}
            font={FontFamily.appFontLight}
            textStyles={CommonStyles.marginTop_0_5}
            color={AppColors.gray}
          >
            By {name}
          </CustomText>
          {!time ? (
            <View style={styles.liveNow}>
              <CustomText
                center
                size={3}
                color={AppColors.white}
                textStyles={CommonStyles.marginTop_0_5}
                font={FontFamily.appFontLight}
              >
                Live now
              </CustomText>
            </View>
          ) : (
            <View style={[styles.liveNow, { backgroundColor: "#858B99" }]}>
              <CustomText
                center
                size={3}
                color={AppColors.white}
                textStyles={CommonStyles.marginTop_0_5}
                font={FontFamily.appFontLight}
              >
                Live at {time}
              </CustomText>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default LiveClasses;
