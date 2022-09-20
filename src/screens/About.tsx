import React from 'react';
import { View, Text } from 'react-native';
import { Logo, TextInput, Button, MonthYearPicker } from '@components';
import { useNavigation } from '@react-navigation/native';
import CrossIcon from '@assets/images/icons/cross.svg';
import styles from './About.style';
import { Suggestion, Suggestions } from './About.interface';

const suggestions: Suggestions = [
  {
    url: 'www.google.com',
    date: '2001 01',
    label: 'google.com back in 2001',
  },
  {
    url: 'www.facebook.com',
    date: '2006 08',
    label: 'facebook.com back in 2006',
  },
  {
    url: 'www.youtube.com',
    date: '2008 01',
    label: 'youtube.com back in 2008',
  },
  {
    url: 'www.twitter.com',
    date: '2012 01',
    label: 'twitter.com back in 2012',
  },
];

export default function About() {
  const navigation = useNavigation();

  function handleRoundButtonClick() {
    navigation.navigate('Home');
  }

  function handleSuggestionClick(suggestion: Suggestion) {
    navigation.navigate('Home', suggestion);
  }

  return (
    <View style={styles.container}>
      <Logo variant="white" />
      <View style={styles.note}>
        <Text style={styles.whiteColor}>
          See any webpage at any point of time.
        </Text>
      </View>
      <View style={styles.suggestions}>
        {suggestions.map(suggestion => (
          <View
            key={suggestion.url}
            onTouchStart={() => handleSuggestionClick(suggestion)}
          >
            <Text style={styles.suggestion}>{suggestion.label}</Text>
          </View>
        ))}
      </View>
      <View
        onTouchStart={handleRoundButtonClick}
        style={styles.roundButtonContainer}
      >
        <View style={styles.roundButton}>
          <CrossIcon color="#000" width={12} />
        </View>
      </View>
    </View>
  );
}
