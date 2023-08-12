import React, {useMemo} from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import AppColors from '../../utills/AppColors';
import styles from './styles';


const Button = ({
  onPress,
  children = 'Button',
  variant = 'primary',
  containerStyle = {},
  touchableOpacityProps,
  textStyle = {},
  textProps = {},
  disabled = false,
  loader = false,
  customDisableColor=AppColors.grey
}) => {
  const getStyles = useMemo(() => {
    return {
      container: {
        ...styles.container,
        ...(disabled
          ? {backgroundColor:customDisableColor}
          : variant === 'primary'
          ? styles.primaryContainer
          : variant === 'yellow' 
          ? styles.yellowContainer
          : variant === 'red'
          ? styles.redContainer
          : styles.orangeContainer),
      },
    };
  }, [variant, disabled]);

  return (
    <TouchableOpacity
      style={[getStyles.container, containerStyle]}
      disabled={disabled}
      onPress={onPress}
      {...touchableOpacityProps}>
        {loader ? 
          (<ActivityIndicator size='small' color={AppColors.white} />)
        :
          (<Text style={[styles.primaryText, textStyle]} {...textProps}>
            {children}
          </Text>)
        }
    </TouchableOpacity>
  );
};

export default Button;
