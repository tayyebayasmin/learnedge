import React, { useState } from 'react';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Icons } from '../../../assets/images';
import { Arrow, Arrowleft, Edit } from '../../../assets/SVG';
import { CustomText } from '../../../components';
import AppColors from '../../../utills/AppColors';
import { CommonStyles } from '../../../utills/CommonStyles';
import { width } from '../../../utills/Dimension';
import * as ImagePicker from 'expo-image-picker';
import { FontFamily } from '../../../utills/Fontfamily';
const subject = ['Math', 'Science', 'English', 'Urdu'];
const UserProfile = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result?.assets[0]?.uri);
    }
  };
  console.log(imageUri);
  return (
    <ScreenWrapper barStyle='dark-content' statusBarColor='white'>
      <View
        style={{ width: width(30), alignSelf: 'center', marginTop: width(10) }}
      >
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{
              alignSelf: 'center',
              width: width(35),
              height: width(35),
              borderRadius: width(100),
            }}
          />
        ) : (
          <Image
            source={Icons.stu}
            style={{
              alignSelf: 'center',
              width: width(35),
              height: width(35),
              borderRadius: width(100),
            }}
          />
        )}
        <TouchableOpacity
          onPress={pickImage}
          style={{
            alignSelf: 'flex-end',
            justifyContent: 'flex-end',
            marginTop: -20,
          }}
        >
          <Edit />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: width(5),
          paddingVertical: width(2),
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: AppColors.grey15,
          justifyContent: 'space-between',
          borderRadius: width(2),
          width: width(95),
          alignSelf: 'center',
          marginTop: width(12),
        }}
      >
        <View>
          <CustomText size={4} color={AppColors.grey10}>
            Name
          </CustomText>
          <CustomText
            size={4.2}
            font={FontFamily.appFontMedium}
            lineHeight={width(8)}
          >
            Rahl Malotra
          </CustomText>
        </View>
        <Arrow width={25} height={25} />
      </View>
      <View
        style={{
          paddingHorizontal: width(5),
          paddingVertical: width(2),
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: AppColors.grey15,
          justifyContent: 'space-between',
          borderRadius: width(2),
          width: width(95),
          alignSelf: 'center',
          marginTop: width(3),
        }}
      >
        <View>
          <CustomText size={4} color={AppColors.grey10}>
            Email
          </CustomText>
          <CustomText
            size={4.2}
            font={FontFamily.appFontMedium}
            lineHeight={width(8)}
          >
            rahulmatlota14@gmail.com
          </CustomText>
        </View>
        <Arrow width={25} height={25} />
      </View>
      <View
        style={{
          paddingHorizontal: width(5),
          paddingVertical: width(2),
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: AppColors.grey15,
          justifyContent: 'space-between',
          borderRadius: width(2),
          width: width(95),
          alignSelf: 'center',
          marginTop: width(3),
        }}
      >
        <View>
          <CustomText size={4} color={AppColors.grey10}>
            Phone Number
          </CustomText>
          <CustomText
            size={4.2}
            font={FontFamily.appFontMedium}
            lineHeight={width(8)}
          >
            0313023037
          </CustomText>
        </View>
        <Arrow width={25} height={25} />
      </View>
      <View
        style={{
          paddingHorizontal: width(5),
          paddingVertical: width(2),
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: AppColors.grey15,
          justifyContent: 'space-between',
          borderRadius: width(2),
          width: width(95),
          alignSelf: 'center',
          marginTop: width(3),
        }}
      >
        <View>
          <CustomText size={4} color={AppColors.grey10}>
            Bio
          </CustomText>
          <CustomText
            size={4.2}
            color={AppColors.grey10}
            font={FontFamily.appFontMedium}
            lineHeight={width(8)}
          >
            Add few words about yourself
          </CustomText>
        </View>
        <Arrow width={25} height={25} />
      </View>
    </ScreenWrapper>
  );
};

export default UserProfile;
