import React from "react";
import Svg, { Path } from "react-native-svg";

const SenseOrgan = ({ height = 24, width = 24 }) => {
  return (
    <Svg width="15" height="25" viewBox="0 0 15 25" fill="none">
      <Path
        d="M13.095 1C13.095 1 10.275 6.83 7.62 8.821C4.492 11.167 6.056 14.295 8.402 14.295H13.877"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.205 11.227C10.972 10.205 11.739 10.205 13.273 10.205M5.107 17.875C5.51354 17.4138 5.85259 16.8973 6.114 16.341M1 20.432C1.71619 20.2429 2.40418 19.9598 3.046 19.59M10.811 21.455C10.7653 22.1615 10.9089 22.8674 11.227 23.5M12.25 17.364C11.909 18.045 11.568 18.727 11.303 19.409M6.114 22.477C5.565 23.037 4.845 23.397 4.068 23.5M8.159 19.41C7.95934 19.9455 7.70534 20.4592 7.401 20.943"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default SenseOrgan;
