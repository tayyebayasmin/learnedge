import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Icons } from '../../../assets/images';
import { Arrowleft, Grade, Notify, Schedule, Share } from '../../../assets/SVG';
import { Button, CustomText } from '../../../components';
import AppColors from '../../../utills/AppColors';
import { CommonStyles } from '../../../utills/CommonStyles';
import { height, width } from '../../../utills/Dimension';
import { FontFamily } from '../../../utills/Fontfamily';
import styles from './styles';
const Notifications = ({ navigation }) => {
  const colors = ['red', 'green', 'blue', 'purple', 'gray', 'brown'];
  return (
    <ScreenWrapper
      barStyle='dark-content'
      statusBarColor='white'
      scrollType='scroll'
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          height: height(100),
        }}
      >
        <CustomText
          size={5}
          font={FontFamily.appFontSemiBold}
          lineHeight={width(6)}
          textStyles={[
            { marginHorizontal: width(8) },
            CommonStyles.marginTop_3,
          ]}
        >
          Notifications
        </CustomText>
        {colors?.map((item) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: width(5),
                width: width(85),
                marginHorizontal: width(5),
                justifyContent: 'space-between',
              }}
            >
              <Notify color={item} />
              <CustomText
                color={AppColors.black}
                textStyles={[
                  CommonStyles.marginHorizontal_1,
                  CommonStyles.marginLeft_2,
                ]}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </CustomText>
            </View>
          );
        })}
      </View>
    </ScreenWrapper>
  );
};

export default Notifications;
