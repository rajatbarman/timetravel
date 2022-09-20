import React, { useEffect, useState } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Logo, TextInput, Button, MonthYearPicker } from '@components';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { Suggestion } from '@screens/About.interface';
import styles from './Home.style';
import { HomeScreenProps } from './Home.interface';

const today = new Date();

export default function Home(props: HomeScreenProps) {
  const routeParams = props.route.params || { url: '', date: '' };
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);
  const navigation = useNavigation();

  function handleTextChange(value: string) {
    setAddress(value);
  }

  function formatMonthYear(dateStr: string) {
    let [yearStr, monthStr] = dateStr.split(' ');
    const month = parseInt(monthStr) - 1;
    const year = parseInt(yearStr);
    const d = new Date(new Date().setMonth(month)).setFullYear(year);
    return getFormatedDate(d, 'MMM, YYYY');
  }

  function handleMonthYearChange(selected: string) {
    setDate(selected);
    setFormattedDate(formatMonthYear(selected));
    setIsDateModalVisible(false);
  }

  function handleDateModalClose() {
    setIsDateModalVisible(false);
  }

  function handleRoundButtonClick() {
    navigation.navigate('About');
  }

  function handleDateInputClick() {
    setIsDateModalVisible(true);
  }

  function fetchTravelURL(
    webAddress: string,
    year: string,
    month: string = '',
  ) {
    const apiUrl = `https://archive.org/wayback/available?url=${webAddress}&timestamp=${year}${month}`;
    setIsSubmitting(true);
    console.log(apiUrl);
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(json => {
        if (!json?.archived_snapshots?.closest?.available) {
          if (month) {
            fetchTravelURL(webAddress, year);
            return;
          }
          ToastAndroid.show(
            'No snapshot found for this address / date, try another combination.',
            ToastAndroid.LONG,
          );
          setIsSubmitting(false);
          return;
        }
        setIsSubmitting(false);
        const url = json.archived_snapshots.closest.url.replace(
          'http://',
          'https://',
        );
        navigation.navigate('WaybackWebview', {
          url,
        });
      })
      .catch(err => {
        console.log('Archive API failed', err);
        setIsSubmitting(false);
      });
  }

  function handleTravelClick() {
    if (!date) {
      ToastAndroid.show(
        'We need a time to travel in time.',
        ToastAndroid.SHORT,
      );
    }

    if (!address) {
      ToastAndroid.show('We need an address to travel to.', ToastAndroid.SHORT);
    }

    const [year, month] = date.split(' ');
    fetchTravelURL(address, year, month);
  }

  useEffect(() => {
    if (routeParams.url) {
      setAddress(routeParams.url);
    }

    if (routeParams.date) {
      setDate(routeParams.date);
      setFormattedDate(formatMonthYear(routeParams.date));
    }
  }, [routeParams.url, routeParams.date]);
  return (
    <View style={styles.container}>
      <Logo variant="colored" />
      <View style={styles.inputGroup}>
        <TextInput
          value={address}
          onChangeText={handleTextChange}
          placeholder="Enter address, Ex: google.com"
        />
        <View
          style={styles.dateInputContainer}
          onTouchStart={handleDateInputClick}
        >
          <TextInput
            editable={false}
            placeholder="Enter date"
            style={styles.dateInput}
            value={formattedDate}
          />
        </View>
      </View>
      <View
        onTouchStart={handleRoundButtonClick}
        style={styles.roundButtonContainer}
      >
        <View style={styles.roundButton}></View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          loading={isSubmitting}
          onTouchStart={handleTravelClick}
          text="Travel"
        />
      </View>
      <MonthYearPicker
        maximumDate={getFormatedDate(new Date(), 'YYYY-MM-DD')}
        onMonthYearChange={handleMonthYearChange}
        current={date ? `${date.replace(' ', '-')}-01` : undefined}
        selected={`${date.replace(' ', '-')}-01`}
        modalProps={{
          visible: isDateModalVisible,
          onRequestClose: handleDateModalClose,
        }}
      />
    </View>
  );
}
