import React from 'react';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Icons } from '../../../assets/images';
import { Arrowleft } from '../../../assets/SVG';
import { CustomText } from '../../../components';
import AppColors from '../../../utills/AppColors';
import { CommonStyles } from '../../../utills/CommonStyles';
import { width } from '../../../utills/Dimension';
import { FontFamily } from '../../../utills/Fontfamily';
const subject = ['Math', 'Science', 'English', 'Urdu'];
const Profile = ({ navigation }) => {
  return (
    <ScreenWrapper barStyle='dark-content' statusBarColor='white'>
      <Image source={Icons.bg} style={{ width: width(100) }} />
      <Image
        source={Icons.stu}
        style={{
          marginTop: -70,
        }}
      />
      <CustomText
        size={5}
        font={FontFamily.appFontSemiBold}
        lineHeight={width(6)}
        textStyles={[
          CommonStyles.marginHorizontal_1,
          CommonStyles.marginVertical_2,
          CommonStyles.marginLeft_3,
        ]}
      >
        Rahl Malotra
      </CustomText>
      <View style={{ height: width(20) }}>
        <ScrollView horizontal>
          {subject.map((item) => {
            return (
              <View
                style={{
                  backgroundColor: AppColors.purple20,
                  width: width(30),
                  height: width(13),
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
                  {item}
                </CustomText>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <CustomText
        color={AppColors.black}
        textStyles={[
          CommonStyles.marginHorizontal_1,
          CommonStyles.marginLeft_2,
        ]}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software
      </CustomText>
    </ScreenWrapper>
  );
};

export default Profile;
