import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Grade = ({ height = 24, width = 24 }) => {
  return (
    <Svg width='14' height='13' viewBox='0 0 14 13' fill='none'>
      <Path
        d='M4.63758 10.3688L7.00008 8.94377L9.36258 10.3875L8.74383 7.68752L10.8251 5.88752L8.08758 5.64377L7.00008 3.09377L5.91258 5.62502L3.17508 5.86877L5.25633 7.68752L4.63758 10.3688ZM2.93137 12.7211L4.00587 8.09424L0.416016 4.9832L5.15251 4.57217L7.00008 0.209229L8.84765 4.57217L13.5841 4.9832L9.99428 8.09424L11.0688 12.7211L7.00008 10.2663L2.93137 12.7211Z'
        fill='#1C1B1F'
      />
    </Svg>
  );
};
export default Grade;
