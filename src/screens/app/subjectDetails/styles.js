import { StyleSheet } from "react-native";
import AppColors from "../../../utills/AppColors";
import { width, height } from "../../../utills/Dimension";
import { FontFamily } from "../../../utills/Fontfamily";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  container1: {
    height: height(25),
    borderBottomLeftRadius: width(12),
    borderBottomRightRadius: width(12),
    opacity: 0.9,
  },
  iconLeft: {
    paddingTop: width(12),
    paddingLeft: width(6),
  },
  container2: {
    marginVertical: width(5),
    backgroundColor: AppColors.white,
    height: height(15),
    alignSelf: "center",
    width: width(80),
    borderRadius: width(5),
    marginTop: -50,
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 3,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width(5),
  },
  Icon: {
    marginTop: -35,
    marginVertical: width(2),
    width: width(18),
    height: width(18),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7230FD",
    borderRadius: width(5),
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 3,
  },
  IconStyle: {
    marginVertical: width(1),
    width: width(15),
    height: width(15),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7230FD",
    borderRadius: width(5),
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 3,
  },
  card: {
    marginVertical: width(3),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColors.white,
    width: width(90),
    alignSelf: "center",
    justifyContent: "space-between",
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 6,
    padding: width(2),
    borderRadius: width(5),
  },
  name: {
    width: width(50),
    marginLeft: width(3),
  },
});
export default styles;
