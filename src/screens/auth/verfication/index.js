import React, { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { CustomText, Button } from '../../../components';
import AppColors from '../../../utills/AppColors';
import { CommonStyles } from '../../../utills/CommonStyles';
import { height, width } from '../../../utills/Dimension';
import { FontFamily } from '../../../utills/Fontfamily';
import styles from './styles';
import { ScreenNames } from '../../../routes';
import { Logo, VerifyOTP } from '../../../assets/SVG';
import { errorMessage } from '../../../utills/message';
import { showMessage } from 'react-native-flash-message';

const Verification = ({ navigation, route }) => {
  const number = route.params?.number;
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const [OTP, setOTP] = useState();
  const [OTP1, setOTP1] = useState();
  const [OTP2, setOTP2] = useState();
  const [OTP3, setOTP3] = useState();
  console.log(`${OTP}${OTP1}${OTP2}${OTP3}`);
  return (
    <ScreenWrapper barStyle='dark-content' statusBarColor={AppColors.white}>
      <View style={styles.mainContainer}>
        <View style={styles.iconStyles}>
          <VerifyOTP />
        </View>
        <CustomText
          size={7}
          textStyles={CommonStyles.marginTop_5}
          lineHeight={height(5)}
          font={FontFamily.appFontSemiBold}
        >
          OTP Verification Code
        </CustomText>
        <CustomText size={3.8} textStyles={CommonStyles.marginHorizontal_5}>
          Enter the 4 digits code sent to you at
        </CustomText>
        <CustomText
          size={3.8}
          textStyles={[
            CommonStyles.marginHorizontal_5,
            CommonStyles.marginVertical_1,
          ]}
        >
          {number ?? '03000000000'}
        </CustomText>

        <View style={[CommonStyles.row, CommonStyles.marginTop_5]}>
          <TextInput
            ref={ref1}
            inputMode='numeric'
            maxLength={1}
            textAlignVertical='center'
            textAlign='center'
            style={styles.input}
            value={OTP}
            onChangeText={(val) => setOTP(val)}
            onSubmitEditing={() => ref2?.current?.focus()}
          />
          <TextInput
            ref={ref2}
            inputMode='numeric'
            maxLength={1}
            textAlignVertical='center'
            textAlign='center'
            style={styles.input}
            value={OTP1}
            onChangeText={(val) => setOTP1(val)}
            onSubmitEditing={() => ref3?.current?.focus()}
          />
          <TextInput
            ref={ref3}
            inputMode='numeric'
            maxLength={1}
            textAlignVertical='center'
            textAlign='center'
            style={styles.input}
            value={OTP2}
            onChangeText={(val) => setOTP2(val)}
            onSubmitEditing={() => ref4?.current?.focus()}
          />
          <TextInput
            ref={ref4}
            inputMode='numeric'
            maxLength={1}
            textAlignVertical='center'
            textAlign='center'
            style={styles.input}
            value={OTP3}
            onChangeText={(val) => setOTP3(val)}
          />
        </View>
        <View style={[CommonStyles.row, styles.resendCode]}>
          <CustomText size={3.8}>Didn't receive the code? </CustomText>
          <TouchableOpacity>
            <CustomText
              size={4}
              color={AppColors.purple}
              font={FontFamily.appFontSemiBold}
            >
              Resend code
            </CustomText>
          </TouchableOpacity>
        </View>
        <Button
          containerStyle={styles.btn}
          onPress={() => {
            const otp = `${OTP}${OTP1}${OTP2}${OTP3}`;
            if (otp.length == 4) {
              navigation.navigate(ScreenNames.DETAILS);
            } else {
              errorMessage('OTP is Incorrect!');
            }
          }}
        >
          Verify
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default Verification;
