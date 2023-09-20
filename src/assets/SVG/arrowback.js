import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Arrowleft = ({ height = 24, width = 24, color = 'white' }) => {
  return (
    <Svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
      <Path
        d='M3.37306 8.74995L9.06921 14.4461L8.00001 15.5L0.500031 7.99998L8.00001 0.5L9.06921 1.55383L3.37306 7.25H15.5V8.74995H3.37306Z'
        fill={color}
      />
    </Svg>
  );
};
export default Arrowleft;
