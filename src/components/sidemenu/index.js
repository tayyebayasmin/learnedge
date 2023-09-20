import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import Animated, {
  Layout,
  SlideInLeft,
  SlideInRight,
} from 'react-native-reanimated';
import { Icons } from '../../assets/images';
import { Notificatoin, Profile } from '../../assets/SVG';
import AppColors from '../../utills/AppColors';
import { CommonStyles } from '../../utills/CommonStyles';
import { height, width } from '../../utills/Dimension';
import { FontFamily } from '../../utills/Fontfamily';
import { CustomText } from '../texts';

const SideMenu = ({
  onPress,
  onPressLiveClasses,
  onPressNotification,
  onPressStore,
}) => {
  return (
    <Animated.View
      style={{
        backgroundColor: AppColors.white,
        position: 'absolute',
        width: width(70),
        height: height(100),
        zIndex: 2,
      }}
      layout={Layout.stiffness()}
      entering={SlideInLeft.delay(500)}
      exiting={SlideInRight.delay(500)}
    >
      <View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
          }}
        >
          <Profile height={width(25)} width={width(25)} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            padding: width(3),
            marginTop: width(5),
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            resizeMode='contain'
            source={Icons.profile}
            style={{ width: width(8), height: width(7) }}
          />
          <CustomText
            size={4}
            font={FontFamily.appFontSemiBold}
            textStyles={CommonStyles.marginLeft_3}
          >
            PROFILE
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: width(3),
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={onPressLiveClasses}
        >
          <Image
            resizeMode='contain'
            source={Icons.course}
            style={{ width: width(8), height: width(7) }}
          />
          <CustomText
            size={4}
            font={FontFamily.appFontSemiBold}
            textStyles={CommonStyles.marginLeft_3}
          >
            Live Class
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: width(3),
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={onPressStore}
        >
          <Image
            resizeMode='contain'
            source={Icons.store}
            style={{ width: width(8), height: width(7) }}
          />
          <CustomText
            size={4}
            font={FontFamily.appFontSemiBold}
            textStyles={CommonStyles.marginLeft_3}
          >
            Store
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: width(3),
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={onPressNotification}
        >
          <Image
            resizeMode='contain'
            source={Icons.help}
            style={{ width: width(8), height: width(6) }}
          />
          <CustomText
            size={4}
            font={FontFamily.appFontSemiBold}
            textStyles={CommonStyles.marginLeft_3}
          >
            Help
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: width(3),
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -15,
          }}
          onPress={onPressNotification}
        >
          <Notificatoin width={width(10)} height={width(15)} />
          <CustomText
            size={4}
            font={FontFamily.appFontSemiBold}
            textStyles={[CommonStyles.marginLeft_1]}
          >
            Notification
          </CustomText>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
export default SideMenu;
