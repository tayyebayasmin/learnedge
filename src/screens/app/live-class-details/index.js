import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Icons } from '../../../assets/images';
import { Arrowleft, Grade, Schedule, Share } from '../../../assets/SVG';
import { Button, CustomText } from '../../../components';
import { ScreenNames } from '../../../routes';
import AppColors from '../../../utills/AppColors';
import { CommonStyles } from '../../../utills/CommonStyles';
import { width } from '../../../utills/Dimension';
import { FontFamily } from '../../../utills/Fontfamily';
import styles from './styles';
const data = [
  'Photosynthesis',
  'Carbon Cycle',
  'Nitrogen Cycle',
  'Difference Between Mitosis And Meiosis',
  'Flora And Fauna',
];
const LiveClassDetail = ({ navigation, route }) => {
  const liveClassData = route?.params?.liveClassData;
  console.log(liveClassData);
  return (
    <ScreenWrapper
      barStyle='dark-content'
      statusBarColor='white'
      scrollType='scroll'
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
    >
      <Image
        source={Icons.techer}
        resizeMode='contain'
        alignSelf='center'
        style={{ marginTop: width(2) }}
      />
      <CustomText
        size={5}
        font={FontFamily.appFontSemiBold}
        lineHeight={width(6)}
        textStyles={[
          CommonStyles.marginHorizontal_1,
          CommonStyles.marginVertical_2,
        ]}
      >
        {liveClassData?.title}
      </CustomText>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: AppColors.purple20,
            width: width(45),
            alignItems: 'center',
            borderRadius: width(3),
            marginLeft: width(2),
          }}
        >
          <CustomText
            size={3.8}
            color={AppColors.purple}
            textStyles={[
              CommonStyles.marginHorizontal_1,
              CommonStyles.marginVertical_2,
            ]}
          >
            {liveClassData?.title}
          </CustomText>
        </View>

        <View
          style={{
            width: width(30),
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: width(10),
          }}
        >
          <Schedule />
          <CustomText
            size={3}
            color={AppColors.black}
            textStyles={[
              CommonStyles.marginHorizontal_1,
              CommonStyles.marginVertical_2,
            ]}
          >
            5 hrs 56 minutes
          </CustomText>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: width(5),
          marginHorizontal: width(2),
          justifyContent: 'space-between',
        }}
      >
        <View style={CommonStyles.rowAlignJustifyCenter}>
          <Image
            source={Icons.stu}
            style={{
              width: width(15),
              height: width(15),
            }}
          />
          <CustomText
            size={5}
            font={FontFamily.appFontSemiBold}
            lineHeight={width(6)}
            textStyles={[
              CommonStyles.marginHorizontal_1,
              CommonStyles.marginVertical_2,
            ]}
          >
            {liveClassData?.name}
          </CustomText>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: AppColors.purple20,
            width: width(20),
            height: width(13),
            alignItems: 'center',
            borderRadius: width(3),
            marginLeft: width(2),
          }}
          onPress={() => navigation.navigate(ScreenNames.PROFILE)}
        >
          <CustomText
            size={3.8}
            color={AppColors.purple}
            textStyles={[
              CommonStyles.marginHorizontal_1,
              CommonStyles.marginVertical_2,
            ]}
          >
            Profile
          </CustomText>
        </TouchableOpacity>
      </View>
      <CustomText
        size={5}
        font={FontFamily.appFontSemiBold}
        lineHeight={width(6)}
        textStyles={[
          CommonStyles.marginHorizontal_1,
          CommonStyles.marginTop_2,
          CommonStyles.marginLeft_2,
        ]}
      >
        About
      </CustomText>
      <CustomText
        color={AppColors.black}
        textStyles={[
          CommonStyles.marginHorizontal_1,
          CommonStyles.marginLeft_2,
        ]}
      >
        5 hrs 56 minutes Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard
        dummy.
      </CustomText>
      <CustomText
        size={5}
        font={FontFamily.appFontSemiBold}
        lineHeight={width(6)}
        textStyles={[
          CommonStyles.marginHorizontal_1,
          CommonStyles.marginTop_2,
          CommonStyles.marginLeft_2,
        ]}
      >
        Lessons
      </CustomText>
      {data?.map((item) => {
        console.log(item);
        return (
          <CustomText textStyles={CommonStyles.marginLeft_2}>{item}</CustomText>
        );
      })}
      <Button containerStyle={styles.btn}>Join Class</Button>
    </ScreenWrapper>
  );
};

export default LiveClassDetail;
