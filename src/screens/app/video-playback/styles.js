import { StyleSheet } from 'react-native';
import AppColors from '../../../utills/AppColors';
import { width, height } from '../../../utills/Dimension';

const styles = StyleSheet.create({
  container: {
    height: height(100) + height(5),
    paddingTop: height(3),
    paddingHorizontal: width(5),
  },
  btn: {
    width: width(22),
    height: width(11),
    alignSelf: 'flex-start',
    marginHorizontal: width(5),
    marginTop: width(5),
    backgroundColor: AppColors.purple,
    marginBottom: width(2),
  },
  input: {
    height: width(40),
    alignSelf: 'center',
    marginTop: width(2),
    borderColor: AppColors.grey50,
  },
  btntxt: {
    fontSize: width(3.6),
    lineHeight: width(4),
  },
  input2: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    height: width(40),
    borderColor: AppColors.grey50,
  },
});
export default styles;
