import { StyleSheet } from "react-native";
import { width, height } from "../../utills/Dimension";
import AppColors from "../../utills/AppColors";

const styles = StyleSheet.create({
  card: {
    paddingVertical:width(2),
    paddingHorizontal: width(5),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: width(5),
    marginVertical: width(2),
    marginRight: width(5),
    justifyContent: "space-between",
    borderColor: AppColors.white,
    backgroundColor: AppColors.white,
    width: width(90),
    alignSelf: "center",
    borderRadius: width(4),
  },
  Icon: {
    marginVertical: width(2),
    alignSelf: "center",
    width: width(17),
    height: width(17),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7230FD",
    marginHorizontal: width(1),
    borderRadius: width(5),
  }
});
export default styles;
