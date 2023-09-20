import { StyleSheet } from 'react-native';
import AppColors from '../../../utills/AppColors';
import { width, height } from '../../../utills/Dimension';

const styles = StyleSheet.create({
  container: {
    height: height(100) + height(5),
    paddingTop: height(3),
    paddingHorizontal: width(5),
  },
  card: {
    paddingHorizontal: width(5),
    paddingVertical: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.grey50,
    justifyContent: 'space-between',
    borderRadius: width(2),
    width: width(95),
    alignSelf: 'center',
    marginTop: width(3),
  },
});
export default styles;
