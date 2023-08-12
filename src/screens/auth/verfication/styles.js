import { StyleSheet } from "react-native";
import AppColors from "../../../utills/AppColors";
import { width, height } from "../../../utills/Dimension";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: height(100),
    alignItems: "center",
    backgroundColor: AppColors.white,
  },
  iconStyles: {
    marginLeft: width(8),
    marginTop: width(10),
    alignSelf: "center",
  },
  resendCode: {
    marginTop: height(20),
  },
  btn: {
    marginTop: height(5),
    height: width(15),
    backgroundColor: AppColors.purple,
    width: width(90),
  },
  input:{
      marginHorizontal: width(1.5),
      fontSize: width(6),
      justifyContent: "center",
      alignItems: "center",
      width: width(15),
      height: width(15),
      borderRadius: width(2),
      borderWidth: width(0.5),
      borderColor: AppColors.grey50,
      backgroundColor: "transparent",
  }
});
export default styles;
