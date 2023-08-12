import React from "react";
import Svg, { Path } from "react-native-svg";

const Menu = ({ height = 24, width = 24 }) => {
  return (
    <Svg width="22" height="15" viewBox="0 0 16 6" fill="none">
      <Path d="M0 6V4H10V6H0ZM0 2V0H16V2H0Z" fill="#2C2C2C" />
    </Svg>
  );
};
export default Menu;
