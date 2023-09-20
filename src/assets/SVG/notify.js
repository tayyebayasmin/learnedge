import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Notify = ({ height = 24, width = 24, color = '#1062FF' }) => {
  return (
    <Svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
      <Path
        d='M6.99992 0.333252C3.31992 0.333252 0.333252 3.31992 0.333252 6.99992C0.333252 10.6799 3.31992 13.6666 6.99992 13.6666C10.6799 13.6666 13.6666 10.6799 13.6666 6.99992C13.6666 3.31992 10.6799 0.333252 6.99992 0.333252ZM7.66659 10.3333H6.33325V8.99992H7.66659V10.3333ZM7.66659 7.66659H6.33325V3.66659H7.66659V7.66659Z'
        fill={color}
      />
    </Svg>
  );
};
export default Notify;
