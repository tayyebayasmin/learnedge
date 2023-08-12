import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import { width,height } from '../../utills/Dimension';
import { FontFamily } from '../../utills/Fontfamily';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderRadius: width(4),
    paddingVertical: height(2),
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  primaryContainer: {
    backgroundColor: AppColors.primary,
  },
  yellowContainer: {
    backgroundColor: AppColors.yellow,
  },
  redContainer: {
    backgroundColor: AppColors.red,
  },
  orangeContainer: {
    backgroundColor: AppColors.orange,
  },
  disabledContainer: {
    backgroundColor: AppColors.grey,
  },
  primaryText: {
    color: 'white',
    fontSize: width(4.5),
    fontFamily: FontFamily.appFontSemiBold
  },
});

export default styles;
