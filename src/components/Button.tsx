import React from 'react';
import { Text, Pressable, ActivityIndicator } from 'react-native';
import styles from './Button.style';
import { ButtonProps } from './Button.interface';

export default function Button(props: ButtonProps) {
  const { loading, ...restProps } = props;
  return (
    <Pressable
      {...restProps}
      pointerEvents={loading ? 'none' : 'auto'}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{props.text}</Text>
      )}
    </Pressable>
  );
}
