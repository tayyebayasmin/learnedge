import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { height, width } from "../../../utills/Dimension";
import { Arrowleft, Play } from "../../../assets/SVG";
import { CustomText } from "../../../components";
import AppColors from "../../../utills/AppColors";
import { FontFamily } from "../../../utills/Fontfamily";
import styles from "./styles";
import { CircularPercentageWithText } from "./percentage";
import { ScreenNames } from "../../../routes";
import { Icons } from "../../../assets/images";
import { CommonStyles } from "../../../utills/CommonStyles";
import { subjectElements, Topics } from "../../../utills/dummyData";
import { CircularPercentageWithIcon } from "./percentageIcon";

const ChapterDetails = ({ navigation, route }) => {
  const { Icon, name, percentage } = route.params.data;
  const color = route.params.color;
  const subjectName = route.params.subjectName;
  console.log(route.params.data);
  return (
    <View style={styles.container}>
      <ScreenWrapper
        barStyle="light-content"
        translucent
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
        }}
      >
        <View style={[styles.container1, { backgroundColor: color }]}>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenNames.BOTTOM_TAB)}
            style={styles.iconLeft}
          >
            <Image
              source={Icons.circle2}
              style={{
                position: "absolute",
                width: width(50),
                marginLeft: -100,
                tintColor: "white",
              }}
            />
            <Image
              source={Icons.circle}
              style={{
                position: "absolute",
                width: width(50),
                tintColor: "white",
              }}
            />
            <Image
              source={Icons.circle}
              style={{
                position: "absolute",
                width: width(50),
                tintColor: "white",
              }}
            />
            <Arrowleft />
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <View>
            <View style={[styles.Icon, { backgroundColor: color }]}>
              {Icon}
            </View>
            <CustomText
              size={5}
              color={AppColors.black}
              letterSpacing={0.3}
              font={FontFamily.appFontSemiBold}
              lineHeight={height(5)}
            >
              {subjectName}
            </CustomText>
            <CustomText
              color={AppColors.grey}
              font={FontFamily.appFontMedium}
              size={4}
              textStyles={{width:width(62)}}
            >
              CHAPTER: {name}
            </CustomText>
          </View>
          <CircularPercentageWithText percentage={percentage} color={color} />
        </View>
        <FlatList
          data={Topics}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <>
                <CustomText
                  size={5}
                  lineHeight={height(5)}
                  font={FontFamily.appFontSemiBold}
                  textStyles={CommonStyles.marginHorizontal_5}
                >
                  {item?.TopicName}
                </CustomText>
                <ScrollView horizontal>
                  {item?.Topics.map((i, index) => {
                    return (
                      <View style={styles.Topics}>
                        <Image
                          style={{
                            width: width(25),
                            height: width(20),
                          }}
                          source={i?.Icon}
                        />
                        <CustomText
                          color={AppColors.grey}
                          textStyle={CommonStyles.marginVertical_2}
                        >
                          {i?.title}
                        </CustomText>
                        <CustomText
                          font={FontFamily.appFontSemiBold}
                          textStyle={CommonStyles.marginVertical_1}
                        >
                          {i?.name}
                        </CustomText>
                      </View>
                    );
                  })}
                </ScrollView>
              </>
            );
          }}
        />
      </ScreenWrapper>
    </View>
  );
};

export default ChapterDetails;
