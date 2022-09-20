import React, { useState } from 'react';
import {
  TextInputChangeEventData,
  NativeSyntheticEvent,
  TextInput as NativeTextInput,
  TextInputProps,
} from 'react-native';
import styles from './TextInput.style';

export default function TextInput(props: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    setIsFocused(true);
    props.onFocus ? props.onFocus(e) : undefined;
  }

  function handleBlur(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    setIsFocused(false);
    props.onBlur ? props.onBlur(e) : undefined;
  }

  return (
    <NativeTextInput
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholderTextColor="#666"
      {...props}
      style={[props.style, styles.input, isFocused && styles.inputFocused]}
    />
  );
}
