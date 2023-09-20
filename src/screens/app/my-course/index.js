import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Button, CustomText } from '../../../components';
import { width } from '../../../utills/Dimension';

const MyCourse = ({ navigation }) => {
  return (
    <ScreenWrapper barStyle='dark-content' statusBarColor='white'>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CustomText size={5} lineHeight={width(6)}>
          Coming Soon
        </CustomText>
      </View>
    </ScreenWrapper>
  );
};

export default MyCourse;
