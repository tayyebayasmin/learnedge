import { StyleSheet } from 'react-native';
import AppColors from '../../../utills/AppColors';
import { width, height } from '../../../utills/Dimension';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    height: height(100),
    backgroundColor: AppColors.white,
  },
  imageStyle: {
    marginVertical: width(1),
  },
  btn: {
    marginTop: width(20),
    backgroundColor: AppColors.purple,
    width: width(85),
    height: width(14),
  },
  social: {
    width: width(35),
    alignItems: 'center',

    justifyContent: 'center',
    borderColor: AppColors.black,
    borderWidth: width(0.2),
    padding: width(2),
    borderRadius: width(2),
  },
  input: {
    width: width(85),
    borderRadius: width(3),
    borderColor: AppColors.grey50,
  },
  inputView: {
    width: width(85),
    flexDirection: 'row',
    marginTop: width(7),
    marginBottom: width(1),
  },
});
export default styles;
