import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ScreenNames from './routes';
import BottomTab from './bottom-tab/bottom';
import {
  ChapterDetails,
  Home,
  LiveClassDetail,
  MyCourse,
  Notifications,
  Profile,
  Store,
  SubjectDetails,
  TopicDetails,
  UserDetails,
} from '../screens/app';
import Video from '../screens/app/video';
import { Startup, Login } from '../screens/auth';
import Verification from '../screens/auth/verfication';
import LiveClassesScreen from '../screens/app/liveClases';
import VideoPlayback from '../screens/app/video-playback';
import EditProfile from '../screens/app/edit-profile';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={ScreenNames.STARTUP}
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
        }}
      >
        <Stack.Screen name={ScreenNames.STARTUP} component={Startup} />
        <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
        <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTab} />
        <Stack.Screen name={ScreenNames.HOME} component={Home} />
        <Stack.Screen name={ScreenNames.VIDEO} component={Video} />
        <Stack.Screen name={ScreenNames.PROFILE} component={Profile} />
        <Stack.Screen name={ScreenNames.STORE} component={Store} />
        <Stack.Screen name={ScreenNames.MY_COURSE} component={MyCourse} />
        <Stack.Screen name={ScreenNames.VERIFY_OTP} component={Verification} />
        <Stack.Screen name={ScreenNames.EDIT_PROFILE} component={EditProfile} />

        <Stack.Screen
          name={ScreenNames.VIDEO_PLAYBACK}
          component={VideoPlayback}
        />
        <Stack.Screen
          name={ScreenNames.TOPIC_DETAILS}
          component={TopicDetails}
        />
        <Stack.Screen
          name={ScreenNames.NOTIFICATIONS}
          component={Notifications}
        />
        <Stack.Screen name={ScreenNames.DETAILS} component={UserDetails} />
        <Stack.Screen
          name={ScreenNames.LIVE_CLASS_DETAILS}
          component={LiveClassDetail}
        />
        <Stack.Screen
          name={ScreenNames.SUBJECT_DETAILS}
          component={SubjectDetails}
        />
        <Stack.Screen
          name={ScreenNames.LIVE_CLASSES}
          component={LiveClassesScreen}
        />
        <Stack.Screen
          name={ScreenNames.CHAPTER_DETAILS}
          component={ChapterDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
export { default as ScreenNames } from './routes';
