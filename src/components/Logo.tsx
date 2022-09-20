import React from 'react';
import { View } from 'react-native';
import TimeTravelLogo from '@assets/images/icons/logo.svg';
import styles from './Logo.style';
import { LogoProps } from './Logo.interface';

export default function Logo(props: LogoProps) {
  const { variant } = props;
  const color = {
    colored: '#2E4FFF',
    white: '#FFF',
  }[variant];

  return (
    <View style={styles.container}>
      <TimeTravelLogo color={color} />
    </View>
  );
}
