import { PressableProps } from 'react-native';

export interface ButtonProps extends PressableProps {
  text: string;
  loading?: boolean;
}
