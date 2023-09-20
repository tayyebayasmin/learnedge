import { StyleSheet } from 'react-native';
import AppColors from '../../../utills/AppColors';
import { width, height } from '../../../utills/Dimension';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: height(100),
    alignItems: 'center',
    backgroundColor: AppColors.white,
  },
  input: {
    width: width(85),
    borderRadius: width(3),
    borderColor: AppColors.grey50,
  },
  btn: {
    marginTop: height(25),
    height: width(15),
    backgroundColor: AppColors.purple,
    width: width(90),
  },
  text: {
    width: width(82),
    marginTop: width(5),
    marginBottom: width(2),
    zIndex: 0,
  },
});
export default styles;
