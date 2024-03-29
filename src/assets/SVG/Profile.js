import React from 'react';
import Svg, { Defs, Circle, Pattern, Image, Use } from 'react-native-svg';

const Bitmap = ({ height = 32, width = 32 }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 32 32' fill='none'>
      <Circle cx='16' cy='16' r='16' fill='url(#pattern0)' />
      <Defs>
        <Pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <Use xlinkHref='#image0_14_9123' transform='scale(0.0181818)' />
        </Pattern>
        <Image
          id='image0_14_9123'
          width='55'
          height='55'
          xlinkHref='data:image/png;base64,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'
        />
      </Defs>
    </Svg>
  );
};
export default Bitmap;
