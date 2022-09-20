import React, { useState, SyntheticEvent } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, About, WaybackWebview } from '@screens';
import { Suggestion } from '@screens/About.interface';

export type RootStackParamList = {
  Home: Suggestion | undefined;
  About: undefined;
  WaybackWebview: { url: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="WaybackWebview" component={WaybackWebview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
