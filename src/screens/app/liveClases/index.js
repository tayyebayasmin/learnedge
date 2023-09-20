import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Icons } from '../../../assets/images';
import { Arrowleft, Grade, Notify, Schedule, Share } from '../../../assets/SVG';
import { Button, CustomText, LiveClasses } from '../../../components';
import { ScreenNames } from '../../../routes';
import AppColors from '../../../utills/AppColors';
import { CommonStyles } from '../../../utills/CommonStyles';
import { height, width } from '../../../utills/Dimension';
import { dummyLiveClassesData } from '../../../utills/dummyData';
import { FontFamily } from '../../../utills/Fontfamily';
import styles from './styles';
const LiveClassesScreen = ({ navigation }) => {
  const [subjectOpen, setSubOpen] = useState();
  const [val, setVal] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Upcoming', value: '8' },
    { label: 'Completed', value: '9' },
    { label: 'Live', value: '10' },
    { label: 'Free', value: '12' },
  ]);
  const [subject, setSubject] = useState([
    { label: 'Biology', value: '8' },
    { label: 'Mathematics', value: '9' },
    { label: 'Chemistry', value: '10' },
    { label: 'English', value: '11' },
    { label: 'Urdu', value: '12' },
  ]);
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
        <View
          style={{
            flexDirection: 'row',
            width: width(90),
            alignItems: 'center',
            paddingVertical: width(2),
            alignSelf: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginBottom: width(1) }}
          >
            <Arrowleft color='black' />
          </TouchableOpacity>
          <CustomText
            size={5}
            font={FontFamily.appFontSemiBold}
            lineHeight={width(6)}
            textStyles={[
              CommonStyles.marginHorizontal_5,
              CommonStyles.marginVertical_2,
            ]}
          >
            Live Classes
          </CustomText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            zIndex: 100,
            marginLeft: width(6),
          }}
        >
          <View style={{ zIndex: 100 }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              textStyle={{
                fontFamily: FontFamily.appFontRegular,
                fontSize: width(3.5),
              }}
              placeholder='Upcoming'
              dropDownContainerStyle={{ width: width(40) }}
              style={{
                width: width(35),
                marginLeft: width(2),
                height: width(10),
                borderRadius: width(6),
                borderColor: AppColors.gray,
                alignSelf: 'center',
              }}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              dropDownDirection='AUTO'
            />
          </View>
          <View style={{ zIndex: 100 }}>
            <DropDownPicker
              open={subjectOpen}
              value={val}
              items={subject}
              textStyle={{
                fontFamily: FontFamily.appFontRegular,
                fontSize: width(3.5),
              }}
              placeholder='All Subjects'
              dropDownContainerStyle={{ width: width(40) }}
              style={{
                marginLeft: width(2),
                width: width(35),
                height: width(10),
                borderRadius: width(6),
                borderColor: AppColors.gray,
                alignSelf: 'center',
              }}
              setOpen={setSubOpen}
              setValue={setVal}
              setItems={setSubject}
              dropDownDirection='AUTO'
            />
          </View>
        </View>
        <FlatList
          style={{
            marginTop: width(8),
            zIndex: 0,
          }}
          data={dummyLiveClassesData}
          renderItem={({ item, index }) => {
            return (
              <LiveClasses
                onPress={() =>
                  navigation.navigate(ScreenNames.LIVE_CLASS_DETAILS, {
                    liveClassData: item,
                  })
                }
                notification
                smallImage
                source={item?.source}
                title={item?.title}
                time={item?.time}
                name={item?.name}
                color={item?.color}
                subject={item?.subject}
                rating={item?.rating}
              />
            );
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default LiveClassesScreen;
