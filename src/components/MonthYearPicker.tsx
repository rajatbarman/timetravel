import React from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { Modal, Button } from '@components';
import { DatePickerProps } from './MonthYearPicker.interface';
import styles from './MonthYearPicker.style';

export default function MonthYearPicker(props: DatePickerProps) {
  const { mode = 'monthYear', modalProps = {} } = props;
  return (
    <Modal {...modalProps} style={styles.modal}>
      <DatePicker
        {...props}
        options={{ ...props.options, mainColor: '#000' }}
        mode={mode}
      />
      <View
        onTouchStart={modalProps.onRequestClose}
        style={styles.buttonContainer}
      >
        <Button text="Done" />
      </View>
    </Modal>
  );
}
