import React from "react";
import Svg, { Path } from "react-native-svg";

const Group3 = ({ height = 24, width = 24 }) => {
  return (
    <Svg width="6" height="10" viewBox="0 0 6 10" fill="none">
      <Path d="M0 0V10H2V5L4 10H6V0H4V5L2 0H0Z" fill="white" />
    </Svg>
  );
};
export default Group3;
