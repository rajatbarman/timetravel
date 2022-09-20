import { ModalProps } from 'react-native';

interface DatePickerOptions {
  backgroundColor: string;
  textHeaderColor: string;
  textDefaultColor: string;
  selectedTextColor: string;
  mainColor: string;
  textSecondaryColor: string;
  borderColor: string;
  defaultFont: string;
  headerFont: string;
  textFontSize: string;
  textHeaderFontSize: string;
  headerAnimationDistance: string;
  daysAnimationDistance: string;
}

export interface DatePickerProps {
  mode?: 'datepicker' | 'calendar' | 'monthYear' | 'time';
  maximumDate?: string;
  current?: string;
  selected: string;
  onMonthYearChange?: (selected: string) => void;
  onSelectedChange?: (selected: string) => void;
  options?: DatePickerOptions;
  modalProps?: ModalProps;
}
