import { StyleSheet } from 'react-native';
import { width, height } from '../../utills/Dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  card: {
    paddingTop: width(1),
    marginVertical: width(1),
    marginRight: width(5),
    height: height(20),
    borderColor: AppColors.white,
    backgroundColor: AppColors.white,
    width: width(35),
    borderRadius: width(4),
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 3,
  },
  Icon: {
    marginVertical: width(2),
    alignSelf: 'center',
    width: width(22),
    height: width(22),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7230FD',
    marginHorizontal: width(1),
    borderRadius: width(5),
  },
});
export default styles;
