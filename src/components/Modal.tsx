import React from 'react';
import { View } from 'react-native';
import { Modal as RNModal, ModalProps } from 'react-native';
import CrossIcon from '@assets/images/icons/cross.svg';
import styles from './Modal.style';
import { TTModalProps } from './Modal.interface';

export default function Modal(props: TTModalProps) {
  const { children, isCrossVisible = false, ...restProps } = props;
  return (
    <RNModal animationType="slide" {...restProps}>
      {isCrossVisible ? (
        <View
          style={styles.crossButton}
          onTouchStart={restProps.onRequestClose}
        >
          <CrossIcon width={16} color="#000" />
        </View>
      ) : null}
      {children}
    </RNModal>
  );
}
