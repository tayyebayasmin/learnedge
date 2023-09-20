import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Icons } from '../../../assets/images';
import { Arrowleft, Grade, Schedule, Share } from '../../../assets/SVG';
import { Button, CustomText } from '../../../components';
import Input from '../../../components/input';
import { Video } from 'expo-av';
import AppColors from '../../../utills/AppColors';
import { CommonStyles } from '../../../utills/CommonStyles';
import { height, width } from '../../../utills/Dimension';
import { FontFamily } from '../../../utills/Fontfamily';
import styles from './styles';
const community = ['Photosynthesis', 'Carbon Cycle'];
const VideoPlayback = ({ navigation, route }) => {
  const [text, setText] = useState('community');
  const liveClassData = route?.params?.liveClassData;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ScreenWrapper
      barStyle='dark-content'
      statusBarColor='white'
      scrollType='scroll'
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
    >
      <Video
        ref={video}
        style={{
          width: width(100),
          height: width(58),
          alignSelf: 'stretch',
        }}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode='contain'
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      <CustomText
        size={5}
        font={FontFamily.appFontSemiBold}
        lineHeight={width(6)}
        textStyles={[
          CommonStyles.marginHorizontal_3,
          CommonStyles.marginVertical_2,
        ]}
      >
        User Interface Design
      </CustomText>
      <View style={CommonStyles.rowAlignItemCenter}>
        <TouchableOpacity onPress={() => setText('community')}>
          <CustomText
            size={4}
            font={
              text === 'community'
                ? FontFamily.appFontSemiBold
                : FontFamily.appFontMedium
            }
            lineHeight={width(6)}
            textStyles={[
              CommonStyles.marginHorizontal_3,
              CommonStyles.marginVertical_1,
              ,
              text == 'community' && {
                width: width(25),
                borderBottomColor: AppColors.purple,
                borderBottomWidth: width(0.6),
              },
            ]}
          >
            Community
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setText('notes')}>
          <CustomText
            size={4}
            font={
              text === 'notes'
                ? FontFamily.appFontSemiBold
                : FontFamily.appFontMedium
            }
            lineHeight={width(6)}
            textStyles={[
              CommonStyles.marginHorizontal_3,
              CommonStyles.marginVertical_1,
              ,
              text == 'notes' && {
                width: width(13),
                borderBottomColor: AppColors.purple,
                borderBottomWidth: width(0.6),
              },
            ]}
          >
            Notes
          </CustomText>
        </TouchableOpacity>
      </View>
      {text === 'notes' && (
        <>
          <Input
            multiline
            placeholder='Enter Notes here...'
            textAlignVertical='top'
            containerStyle={styles.input}
            innerContainerStyle={styles.input2}
          />
          <Button containerStyle={styles.btn} textStyle={styles.btntxt}>
            Save
          </Button>
          {community.map(() => {
            return (
              <View
                style={[
                  CommonStyles.rowAlignJustifyCenter,
                  {
                    backgroundColor: AppColors.white,
                    borderRadius: width(2),
                    width: width(95),
                    padding: width(2),
                    alignSelf: 'center',
                    marginTop: width(4),
                  },
                ]}
              >
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CustomText size={3} font={FontFamily.appFontSemiBold}>
                    29/4/2023
                  </CustomText>
                </View>
                <CustomText
                  size={3}
                  left
                  color={AppColors.black}
                  textStyles={[
                    CommonStyles.marginHorizontal_1,
                    CommonStyles.marginLeft_2,
                    ,
                    {
                      width: width(70),
                    },
                  ]}
                >
                  5 hrs 56 minutes Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy.
                </CustomText>
              </View>
            );
          })}
        </>
      )}
      {text === 'community' && (
        <>
          <Input
            multiline
            textAlignVertical='top'
            containerStyle={styles.input}
            innerContainerStyle={styles.input2}
          />
          <Button containerStyle={styles.btn} textStyle={styles.btntxt}>
            Save
          </Button>
          {community.map(() => {
            return (
              <View
                style={[
                  CommonStyles.rowAlignJustifyCenter,
                  {
                    backgroundColor: AppColors.white,
                    borderRadius: width(2),
                    width: width(95),
                    padding: width(2),
                    alignSelf: 'center',
                    marginTop: width(4),
                  },
                ]}
              >
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    source={Icons.stu}
                    style={{
                      width: width(15),
                      height: width(15),
                    }}
                  />
                  <CustomText size={3} font={FontFamily.appFontSemiBold}>
                    Rahul
                  </CustomText>
                </View>
                <CustomText
                  size={3}
                  left
                  color={AppColors.black}
                  textStyles={[
                    CommonStyles.marginHorizontal_1,
                    CommonStyles.marginLeft_2,
                    ,
                    {
                      width: width(70),
                    },
                  ]}
                >
                  5 hrs 56 minutes Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy.
                </CustomText>
              </View>
            );
          })}
        </>
      )}
    </ScreenWrapper>
  );
};

export default VideoPlayback;
