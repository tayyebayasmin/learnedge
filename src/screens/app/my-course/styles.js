import { StyleSheet } from 'react-native';
import AppColors from '../../../utills/AppColors';
import { width, height } from '../../../utills/Dimension';

const styles = StyleSheet.create({
  container: {
    height: height(100) + height(5),
    paddingTop: height(3),
    paddingHorizontal: width(5),
  },
});
export default styles;
