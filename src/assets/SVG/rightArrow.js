import React from "react";
import Svg, { Defs, Rect, Path, G, ClipPath } from "react-native-svg";

const Arrow = ({ height = 24, width = 24 }) => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_14_4587)">
        <Path
          d="M6 4L10 8L6 12"
          stroke="#222B45"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_14_4587">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default Arrow;
