import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { width } from '../../utills/Dimension';

export const CircularPercentageWithIcon = ({ percentage, Icon,color }) => {
  const strokeWidth = 5;
  const radius = 22;
  const circumference = 2 * Math.PI * radius;

  const progressDegrees = (360 * percentage) / 100;

  const svgWidth = 2 * (radius + strokeWidth);
  const svgHeight = 2 * (radius + strokeWidth);
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    iconContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      top:radius-3
    },
  });
  return (
    <View style={styles.container}>
      <Svg height={svgHeight} width={svgWidth}>
        <Circle
          r={radius}
          cx={svgWidth / 2}
          cy={svgHeight / 2}
          fill="transparent"
          stroke="white"
          strokeWidth={strokeWidth}
        />
        <Circle
          r={radius}
          cx={svgWidth / 2}
          cy={svgHeight / 2}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - (progressDegrees / 360) * circumference}
        />
      </Svg>
      <View style={styles.iconContainer}>
        <Icon color={color}/>
      </View>
    </View>
  );
};


