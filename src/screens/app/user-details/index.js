import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { CustomText, Button } from '../../../components';
import AppColors from '../../../utills/AppColors';
import { CommonStyles } from '../../../utills/CommonStyles';
import { height, width } from '../../../utills/Dimension';
import { FontFamily } from '../../../utills/Fontfamily';
import styles from './styles';
import { ScreenNames } from '../../../routes';
import Input from '../../../components/input';
import DropDownPicker from 'react-native-dropdown-picker';

const UserDetails = ({ navigation, route }) => {
  const [name, setName] = useState();
  const [code, setCode] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Class 8th', value: '8' },
    { label: 'Class 9th', value: '9' },
    { label: 'Class 10th', value: '10' },
    { label: 'Class 11th', value: '11' },
    { label: 'Class 12th', value: '12' },
  ]);
  return (
    <ScreenWrapper barStyle='dark-content' statusBarColor={AppColors.white}>
      <View style={styles.mainContainer}>
        <CustomText
          size={7}
          textStyles={CommonStyles.marginTop_5}
          lineHeight={height(5)}
          font={FontFamily.appFontSemiBold}
        >
          ENTER YOUR DETAILS
        </CustomText>

        <CustomText
          size={4}
          font={FontFamily.appFontSemiBold}
          textStyles={[styles.text, { marginTop: width(10) }]}
        >
          Full Name
        </CustomText>
        <Input
          keyboardType='default'
          placeholder='Enter Your Full Name'
          value={name}
          onChange={(val) => setName(val)}
          innerContainerStyle={styles.input}
          containerStyle={{ width: width(85) }}
        />
        <CustomText
          size={4}
          font={FontFamily.appFontSemiBold}
          textStyles={styles.text}
        >
          Course
        </CustomText>
        <View style={{ zIndex: 100 }}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            placeholder='Select Course'
            dropDownContainerStyle={{ width: width(85) }}
            style={{
              width: width(85),
              alignSelf: 'center',
            }}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownDirection='AUTO'
          />
        </View>
        <CustomText
          size={4}
          font={FontFamily.appFontSemiBold}
          textStyles={styles.text}
        >
          Referral Code
        </CustomText>
        <Input
          keyboardType='number-pad'
          placeholder='Enter Referral Code'
          value={code}
          onChange={(val) => setCode(val)}
          innerContainerStyle={styles.input}
          containerStyle={{ width: width(85) }}
        />
        <Button
          containerStyle={styles.btn}
          onPress={() => {
            navigation.navigate(ScreenNames.BOTTOM_TAB);
          }}
        >
          Continue
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default UserDetails;
