import React, { useState, useRef } from "react";
import { View, Image } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { Icons } from "../../../assets/images";
import { CustomText, Button } from "../../../components";
import AppColors from "../../../utills/AppColors";
import Swiper from "react-native-web-swiper";
import { CommonStyles } from "../../../utills/CommonStyles";
import { height, width } from "../../../utills/Dimension";
import { FontFamily } from "../../../utills/Fontfamily";
import styles from "./styles";
import { ScreenNames } from "../../../routes";
const data = [
  {
    id: 1,
    image: Icons.bookLover,
    title: "Hello, Brainest People!",
    title2:
      "Welcome to Learn Edge! The best community to learn and improve skills to level up our career",
  },
  {
    id: 2,
    image: Icons.communication,
    title: "Two Ways Communication",
    title2:
      "Welcome to Learn Edge! The best community to learn and improve skills to level up our career",
  },
  {
    id: 3,
    image: Icons.formula,
    title: "Meet our Expert Instructors",
    title2:
      "Welcome to Learn Edge! The best community to learn and improve skills to level up our career",
  },
];
const StartUp = ({ navigation }) => {
  const [index, setIndex] = useState();
  const swiperRef = useRef(null);
  return (
    <ScreenWrapper barStyle="dark-content" statusBarColor={AppColors.white}>
      <View style={styles.mainContainer}>
        <Swiper
          ref={swiperRef}
          innerContainerStyle={{
            height: height(75),
          }}
          swipeAreaStyle={{
            height: height(75),
          }}
          onIndexChanged={(v) => setIndex(v)}
          controlsProps={{
            prevTitle: "",
            nextTitle: "",
            dotActiveStyle: {
              width: width(6),
              backgroundColor: AppColors.purple,
            },
          }}
        >
          {data.map((item, index) => {
            console.log(item);
            return (
              <View key={index} style={{ width: width(100) }}>
                <Image
                  source={item.image}
                  style={styles.imageStyle}
                  resizeMode="contain"
                />
                <CustomText
                  size={5.5}
                  color={AppColors.black}
                  center
                  lineHeight={height(5)}
                  textStyles={[
                    CommonStyles.marginTop_5,
                    CommonStyles.paddingHorizontal_5,
                  ]}
                  font={FontFamily.appFontSemiBold}
                >
                  {item?.title}
                </CustomText>
                <CustomText
                  size={3.5}
                  color={AppColors.grey}
                  center
                  letterSpacing={1}
                  textStyles={CommonStyles.marginHorizontal_3}
                  font={FontFamily.appFontSemiBold}
                >
                  {item?.title2}
                </CustomText>
              </View>
            );
          })}
        </Swiper>
        <Button
          containerStyle={styles.btn}
          onPress={() => {
            index != 2
              ? swiperRef.current.goToNext()
              : navigation.navigate(ScreenNames.LOGIN)
            }}
        >
          Continue
        </Button>
        <Button
          onPress={() => navigation.navigate(ScreenNames.LOGIN)}
          textStyle={{ color: AppColors.black }}
          containerStyle={styles.btn2}
        >
          Skip
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default StartUp;
