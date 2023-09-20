import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Icons } from '../../assets/images';
import { CustomText, LiveClasses } from '../../components';
import ScreenNames from '../routes';
import {
  Home,
  LiveClassDetail,
  MyCourse,
  Profile,
  Store,
} from '../../screens/app';
import AppColors from '../../utills/AppColors';
import { height, width } from '../../utills/Dimension';
import { FontFamily } from '../../utills/Fontfamily';
import { Startup } from '../../screens/auth';
import LiveClassesScreen from '../../screens/app/liveClases';
import UserProfile from '../../screens/app/user-profile';
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: AppColors.white,
          height: height(12),
          paddingTop: height(0.5),
        },
      }}
    >
      <Tab.Screen
        name={ScreenNames.HOME}
        component={Home}
        options={() => ({
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabView}>
              <Image
                source={Icons.home}
                style={[
                  styles.iconStyle,
                  { tintColor: focused ? AppColors.purple : AppColors.black30 },
                ]}
              />
              <CustomText
                color={focused ? AppColors.purple : AppColors.black30}
              >
                Home
              </CustomText>
              <View
                style={focused ? styles.focusedBarStyle : styles.barStyle}
              />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name={ScreenNames.LIVE_CLASSES}
        component={LiveClassesScreen}
        options={() => ({
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabView}>
              <Image
                source={Icons.course}
                style={[
                  styles.iconStyle,
                  { tintColor: focused ? AppColors.purple : AppColors.black30 },
                ]}
              />
              <CustomText
                color={focused ? AppColors.purple : AppColors.black30}
              >
                Live Class
              </CustomText>
              <View
                style={focused ? styles.focusedBarStyle : styles.barStyle}
              />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name={ScreenNames.STORE}
        component={Store}
        options={() => ({
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabView}>
              <Image
                source={Icons.store}
                style={[
                  styles.iconStyle,
                  { tintColor: focused ? AppColors.purple : AppColors.black30 },
                ]}
              />
              <CustomText
                color={focused ? AppColors.purple : AppColors.black30}
              >
                Store
              </CustomText>
              <View
                style={focused ? styles.focusedBarStyle : styles.barStyle}
              />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name={ScreenNames.USER_PROFILE}
        component={UserProfile}
        options={() => ({
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.tabView}>
              <Image
                source={Icons.profile}
                style={[
                  styles.iconStyle,
                  { tintColor: focused ? AppColors.purple : AppColors.black30 },
                ]}
              />
              <CustomText
                color={focused ? AppColors.purple : AppColors.black30}
              >
                Profile
              </CustomText>
              <View
                style={focused ? styles.focusedBarStyle : styles.barStyle}
              />
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  iconStyle: {
    resizeMode: 'contain',
    width: width(6),
    height: height(3),
    tintColor: AppColors.black,
  },
  tabView: {
    alignItems: 'center',
  },
  focusedBarStyle: {
    height: height(0.4),
    width: width(12),
    backgroundColor: AppColors.purple,
    borderBottomEndRadius: width(4),
    borderBottomStartRadius: width(4),
    marginTop: height(0.5),
  },
  barStyle: {
    height: height(0.4),
    width: width(12),
    backgroundColor: AppColors.transparent,
    borderBottomEndRadius: width(4),
    borderBottomStartRadius: width(4),
    marginTop: height(0.5),
  },
  badge: {
    position: 'absolute',
    backgroundColor: AppColors.red,
    zIndex: 10,
    right: width(4),
    top: -height(0.8),
    borderRadius: width(10),
    width: height(2.5),
    height: height(2.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: width(3),
    color: AppColors.white,
    fontFamily: FontFamily.appFontBold,
  },
});
