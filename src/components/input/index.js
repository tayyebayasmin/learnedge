import React, { forwardRef } from "react";
import { TextInput, View } from "react-native";
import AppColors from "../../utills/AppColors";
import styles from './styles'

const Input = (
  {
    containerStyle = {},
    innerContainerStyle = {},
    inputStyle = {},
    placeholder = 'Enter text here!',
    onChange,
    keyboardType = 'default',
    returnKeyType = 'default',
    maxlength,
    multiline = false,
    numberOfLines,
    secureTextEntry = false,
    textAlignVertical = 'center',
    autofocus = false,
    value,
    onSubmitEditing,
    autoCapitalize = 'sentences'
  },
  ref
) => {

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.innerContainer, innerContainerStyle]}>
        <TextInput
          ref={ref}
          placeholder={placeholder}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          maxLength={maxlength}
          multiline={multiline}
          value={value}
          onChangeText={onChange}
          numberOfLines={numberOfLines}
          secureTextEntry={secureTextEntry}
          textAlignVertical={textAlignVertical}
          autoFocus={autofocus}
          placeholderTextColor={AppColors.grey10}
          style={[styles.inputStyle, inputStyle]}
          onSubmitEditing={onSubmitEditing}
        />

      </View>

    </View>
  );
}

export default forwardRef(Input);