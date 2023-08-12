import { StyleSheet } from "react-native";
import AppColors from "../../../utills/AppColors";
import { width, height } from "../../../utills/Dimension";
import { FontFamily } from "../../../utills/Fontfamily";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width(5),
    marginTop: width(3),
    marginBottom:width(1)
  },
  search: {
    flexDirection: "row",
    marginHorizontal: width(5),
    marginVertical: width(5),
  },
  viewAll:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    backgroundColor: "#7230FD",
    padding: width(3.5),
    borderRadius: width(2),
  },
  outerContainerInput:{
    width: width(80),
  },
  searchInput: {
    borderColor: AppColors.white,
    backgroundColor: AppColors.white,
    width: width(76),
    borderRadius: width(3),
    shadowColor: AppColors.white,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    elevation: 1,
  },
});
export default styles;
