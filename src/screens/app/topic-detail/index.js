import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { height, width } from '../../../utills/Dimension';
import { Arrowleft, Play, Schedule } from '../../../assets/SVG';
import { CustomText } from '../../../components';
import AppColors from '../../../utills/AppColors';
import { FontFamily } from '../../../utills/Fontfamily';
import styles from './styles';
import { CircularPercentageWithText } from './percentage';
import { ScreenNames } from '../../../routes';
import { Icons } from '../../../assets/images';
import { CommonStyles } from '../../../utills/CommonStyles';
import {
  subjectElements,
  topicElements,
  Topics,
} from '../../../utills/dummyData';
import { CircularPercentageWithIcon } from './percentageIcon';

const TopicDetails = ({ navigation, route }) => {
  const { Icon, name, percentage } = route.params.data;
  const color = route.params.color;
  const item = route.params.item;
  console.log('item', item);
  const subjectName = route.params.subjectName;
  console.log(route.params.data);
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
            onPress={() => navigation.navigate(ScreenNames.BOTTOM_TAB)}
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
              textStyles={{ width: width(62) }}
            >
              {item?.TopicName}
            </CustomText>
          </View>
          <CircularPercentageWithText percentage={percentage} color={color} />
        </View>
        <FlatList
          data={topicElements}
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: width(2) }}
          renderItem={({ item, index }) => {
            console.log(item);
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate(ScreenNames.VIDEO_PLAYBACK)}
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
                  <View>
                    <CustomText textStyles={styles.name}>
                      {item?.name}
                    </CustomText>
                    <View
                      style={[
                        CommonStyles.rowAlignJustifyCenter,
                        CommonStyles.marginLeft_2,
                      ]}
                    >
                      <Schedule />
                      <CustomText
                        size={3}
                        textStyles={[
                          CommonStyles.marginLeft_1,
                          CommonStyles.marginTop_0_5,
                        ]}
                        color={AppColors.gray}
                      >
                        {item?.time}
                      </CustomText>
                    </View>
                  </View>
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

export default TopicDetails;
