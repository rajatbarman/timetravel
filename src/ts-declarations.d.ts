import { RootStackParamList } from './App';

declare module 'react-native-modern-datepicker';

/* This is for useNavigation hook */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
