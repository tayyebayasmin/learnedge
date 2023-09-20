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

const EditProfile = ({ navigation, route }) => {
  const { value, type } = route?.params?.data;
  const [name, setName] = useState();

  return (
    <ScreenWrapper barStyle='dark-content' statusBarColor={AppColors.white}>
      <View style={styles.mainContainer}>
        <CustomText
          size={5}
          textStyles={[CommonStyles.marginTop_5, { width: width(80) }]}
          lineHeight={height(4)}
          font={FontFamily.appFontSemiBold}
        >
          Edit your {type}
        </CustomText>
        <CustomText
          size={4}
          textStyles={{ width: width(80) }}
          font={FontFamily.appFontRegular}
        >
          You can change your {type} here.
        </CustomText>
        <Input
          keyboardType='default'
          placeholder={value ?? `Enter Your ${type} here`}
          value={value}
          multiline
          onChange={(val) => setName(val)}
          textAlignVertical='top'
          innerContainerStyle={[
            styles.input,
            { height: width(30), justifyContent: 'flex-start' },
          ]}
          containerStyle={{
            width: width(80),
            marginTop: width(6),
            height: width(25),
          }}
        />

        <Button
          containerStyle={styles.btn}
          onPress={() => {
            navigation.navigate(ScreenNames.USER_PROFILE);
          }}
        >
          UPDATE
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default EditProfile;
