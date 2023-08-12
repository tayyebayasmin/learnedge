import React from "react";
import { TouchableOpacity, Text, View ,Image} from "react-native";
import { Arrow,Play } from "../../assets/SVG";
import { width } from "../../utills/Dimension";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../../routes";
const CornerCard = ({ title, onPress, Icon = () => null, color = "red" }) => {
    const navigation = useNavigation()
  return (
    <View style={{ marginHorizontal: width(3) }}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate(ScreenNames.VIDEO)}>
        <Image source={require("../../assets/images/image1.png")} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center",marginLeft:width(1) }}>
        <View
          style={{
            width: width(10),
            height: width(10),
            borderRadius: width(10),
            borderColor: "#8C2C8C",
            marginRight: width(2),
            marginVertical: width(3),
            alignItems: "center",
            justifyContent: "center",
            borderWidth: width(0.5),
          }}
        >
          <Play />
        </View>
        <View>
          <Text
            style={{
              color: "#222B45",
              fontSize: width(4),
            }}
          >
            Byju Raveendran:
          </Text>
          <Text
            style={{
              color: "#8F9BB2",
            }}
          >
            We have positively disrupted our own …
          </Text>
        </View>
      </View>
    </View>
  );
};
export default CornerCard;
