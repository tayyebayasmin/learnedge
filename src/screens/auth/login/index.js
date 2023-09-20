import React, { useState, useRef } from 'react';
import { View, Image } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Icons } from '../../../assets/images';
import { CustomText, Button } from '../../../components';
import AppColors from '../../../utills/AppColors';
import Swiper from 'react-native-web-swiper';
import { CommonStyles } from '../../../utills/CommonStyles';
import { height, width } from '../../../utills/Dimension';
import { FontFamily } from '../../../utills/Fontfamily';
import styles from './styles';
import { ScreenNames } from '../../../routes';
import { Facebook, Google, Logo } from '../../../assets/SVG';
import Input from '../../../components/input';
import { errorMessage } from '../../../utills/message';

const Login = ({ navigation }) => {
  const [number, setNumber] = useState();
  return (
    <ScreenWrapper
      barStyle='dark-content'
      statusBarColor={AppColors.white}
      scrollType='scroll'
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
      }}
    >
      <View style={styles.mainContainer}>
        <View style={styles.imageStyle}>
          <Image
            source={Icons.logo}
            style={{
              width: width(50),
              height: width(50),
              marginTop: width(8),
            }}
          />
        </View>
        <CustomText
          size={7}
          center
          lineHeight={height(5)}
          font={FontFamily.appFontSemiBold}
          textStyles={CommonStyles.marginHorizontal_5}
        >
          Sign in to make your course with App Name
        </CustomText>
        <CustomText
          size={4}
          center
          color={AppColors.grey}
          lineHeight={height(3)}
          font={FontFamily.appFontMedium}
          textStyles={[
            CommonStyles.marginHorizontal_5,
            CommonStyles.marginTop_2,
          ]}
        >
          If continuing, you have agreed to our Terms of Service and confirm you
          have read our Privacy And Cookie Statement
        </CustomText>
        <View style={styles.inputView}>
          <CustomText size={4} font={FontFamily.appFontSemiBold}>
            Phone Number
          </CustomText>
          <CustomText
            color={AppColors.red}
            size={4}
            textStyles={CommonStyles.marginLeft_1}
          >
            *
          </CustomText>
        </View>
        <Input
          keyboardType='number-pad'
          placeholder='Enter Your Phone Number'
          value={number}
          onChange={(val) => setNumber(val)}
          innerContainerStyle={styles.input}
          containerStyle={{ width: width(85) }}
        />
        <Button
          containerStyle={styles.btn}
          onPress={() => {
            if (number) {
              navigation.navigate(ScreenNames.VERIFY_OTP, {
                number: number,
              });
            } else errorMessage('Please Enter your Phone Number');
          }}
        >
          Get Started !
        </Button>
        <CustomText size={3.8} textStyles={CommonStyles.marginVertical_2}>
          Or login with
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width(75),
          }}
        >
          <View style={[CommonStyles.rowAlignJustifyCenter, styles.social]}>
            <Facebook />
            <CustomText textStyles={CommonStyles.marginLeft_2} size={4}>
              Facebook
            </CustomText>
          </View>
          <View style={[CommonStyles.rowAlignJustifyCenter, styles.social]}>
            <Google />
            <CustomText textStyles={CommonStyles.marginLeft_2} size={4}>
              Google
            </CustomText>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
