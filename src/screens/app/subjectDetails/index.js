import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { height, width } from '../../../utills/Dimension';
import { Arrowleft, Play } from '../../../assets/SVG';
import { CustomText } from '../../../components';
import AppColors from '../../../utills/AppColors';
import { FontFamily } from '../../../utills/Fontfamily';
import styles from './styles';
import { CircularPercentageWithText } from './percentage';
import { ScreenNames } from '../../../routes';
import { Icons } from '../../../assets/images';
import { CommonStyles } from '../../../utills/CommonStyles';
import { subjectElements } from '../../../utills/dummyData';
import { CircularPercentageWithIcon } from './percentageIcon';

const SubjectDetails = ({ navigation, route }) => {
  const { color, Icon, name, chapters, lessons, percentage } =
    route.params.data;
  return (
    <View style={styles.container}>
      <ScreenWrapper
        barStyle='light-content'
        translucent
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
        }}
      >
        <View style={[styles.container1, { backgroundColor: color }]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconLeft}
          >
            <Image
              source={Icons.circle}
              style={{
                position: 'absolute',
                width: width(50),
                marginLeft: -100,
                tintColor: 'white',
              }}
            />
            <Image
              source={Icons.circle}
              style={{
                position: 'absolute',
                width: width(50),
                tintColor: 'white',
              }}
            />
            <Image
              source={Icons.circle}
              style={{
                position: 'absolute',
                width: width(50),
                tintColor: 'white',
              }}
            />
            <Arrowleft />
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <View>
            <View style={[styles.Icon, { backgroundColor: color }]}>
              <Icon />
            </View>
            <CustomText color={AppColors.grey} font={FontFamily.appFontMedium}>
              {chapters} Chapters | {lessons} Lessons
            </CustomText>
            <CustomText
              size={5.5}
              color={AppColors.black}
              letterSpacing={0.3}
              font={FontFamily.appFontSemiBold}
              lineHeight={height(5.8)}
            >
              {name.toUpperCase()}
            </CustomText>
          </View>
          <CircularPercentageWithText percentage={percentage} color={color} />
        </View>
        <CustomText
          size={5}
          lineHeight={height(5)}
          font={FontFamily.appFontSemiBold}
          textStyles={CommonStyles.marginHorizontal_5}
        >
          Chapters
        </CustomText>
        <FlatList
          data={subjectElements}
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: width(2) }}
          renderItem={({ item, index }) => {
            console.log(item);
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() =>
                  navigation.navigate(ScreenNames.CHAPTER_DETAILS, {
                    data: item,
                    color: color,
                    subjectName: name,
                  })
                }
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View style={[styles.IconStyle, { backgroundColor: color }]}>
                    {item?.Icon}
                  </View>
                  <CustomText textStyles={styles.name}>{item?.name}</CustomText>
                </View>
                <View
                  style={{
                    width: width(15),
                  }}
                >
                  <CircularPercentageWithIcon
                    percentage={item?.percentage}
                    Icon={Play}
                    color={color}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScreenWrapper>
    </View>
  );
};

export default SubjectDetails;
