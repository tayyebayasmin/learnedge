import { StyleSheet } from "react-native";
import { width, height } from "../../utills/Dimension";
import AppColors from "../../utills/AppColors";

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: width(5),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: width(5),
    marginVertical: width(2),
    marginRight: width(5),
    justifyContent: "space-between",
    borderColor: AppColors.white,
    backgroundColor: AppColors.white,
    width: width(95),
    alignSelf: "center",
    borderRadius: width(4),
  },
  liveNow:{
      backgroundColor: "#FD6173",
      borderRadius:width(8),
      width:width(22),
      padding:width(0.5),
      marginTop:width(2)
  }
});
export default styles;
