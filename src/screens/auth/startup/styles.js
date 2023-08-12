import {StyleSheet} from 'react-native';
import AppColors from '../../../utills/AppColors';
import { width,height } from '../../../utills/Dimension';

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    backgroundColor:AppColors.white 
   },
   imageStyle:{
    width:width(100),
    height:height(48),
    marginTop:width(5)

   },
  btn:{
    backgroundColor:AppColors.purple,
    width:width(60)
  },
  btn2:{
    marginTop:width(2),
    marginBottom:width(3),
    backgroundColor:'transparent'
  }
});
export default styles;
