import React from 'react';
import Svg, { Path, Circle, G } from 'react-native-svg';

const Edit = ({ height = 24, width = 24 }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18.195'
      viewBox='0 0 18 18.195'
    >
      <G id='Icon_Edit' data-name='Icon Edit' transform='translate(1 1.195)'>
        <Path
          id='Path_1774'
          data-name='Path 1774'
          d='M20.032,14.94l.62-2.482,7.812-7.812a2.208,2.208,0,0,1,3.122,0l0,0a2.208,2.208,0,0,1,0,3.122l-7.812,7.812-2.482.62A1.041,1.041,0,0,1,20.032,14.94Z'
          transform='translate(-16.235 -4)'
          fill='none'
          stroke='black'
          stroke-linecap='round'
          stroke-linejoin='round'
          strokeWidth='2'
        />
        <Path
          id='Path_1775'
          data-name='Path 1775'
          d='M10.588,8H5.882A1.882,1.882,0,0,0,4,9.882V21.177a1.882,1.882,0,0,0,1.882,1.882H17.177a1.882,1.882,0,0,0,1.882-1.882V16.471'
          transform='translate(-4 -7.059)'
          fill='none'
          stroke='black'
          stroke-linecap='round'
          stroke-linejoin='round'
          strokeWidth='2'
        />
      </G>
    </Svg>
  );
};
export default Edit;
