import React from "react";
import Svg, { Path } from "react-native-svg";

const Group2 = ({ height = 24, width = 24 }) => {
  return (
    <Svg width="13" height="15" viewBox="0 0 13 15" fill="none">
      <Path
        d="M11.011 5.89767C13.011 8.71767 11.481 11.9477 10.741 13.2077C10.6325 13.3839 10.4867 13.5343 10.314 13.6483C10.1413 13.7623 9.9457 13.8372 9.74099 13.8677C8.29099 14.1177 4.68099 14.3977 2.74099 11.5777C0.830989 8.91767 0.910989 4.23767 1.08099 2.00767C1.08769 1.84153 1.13376 1.67935 1.21539 1.5345C1.29703 1.38964 1.4119 1.26624 1.55055 1.17445C1.6892 1.08267 1.84767 1.02513 2.01291 1.00656C2.17814 0.988 2.34543 1.00894 2.50099 1.06767C4.65099 1.68767 9.13099 3.23767 11.011 5.89767Z"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.271 4.96765C6.56152 7.66692 8.57185 10.5919 10.271 13.6977"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default Group2;
