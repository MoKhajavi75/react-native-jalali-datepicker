import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { DatePicker } from '@mohamadkh75/react-native-jalali-datepicker';

const App = () => (
  <>
    <StatusBar backgroundColor='#4bcffa' />

    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e272e'
      }}
    >
      <Text
        style={{
          fontFamily: 'Vazir-Black-FD',
          fontSize: 18,
          color: '#4bcffa',
          marginBottom: 5
        }}
      >
        RNJD
      </Text>
      <Text
        style={{ fontFamily: 'Vazir-Black-FD', fontSize: 18, color: '#4bcffa' }}
      >
        تقویم شمسی
      </Text>
    </View>

    <View style={{ flex: 4, backgroundColor: '#1e272e' }}>
      <DatePicker
        style={{
          width: '95%',
          height: '80%',
          alignSelf: 'center',
          backgroundColor: '#1e272e',
          borderWidth: 1,
          borderColor: '#4bcffa',
          borderRadius: 10,
          elevation: 4
        }}
        selected='1399/1/18'
        dateSeparator='/'
        minDate='1398/1/18'
        maxDate='1400/1/18'
        onDateChange={date => console.warn(date)}
        headerContainerStyle={{ height: '15%' }}
        yearMonthTextStyle={{
          fontFamily: 'Vazir-Bold-FD',
          fontSize: 22,
          color: '#4bcffa'
        }}
        iconContainerStyle={{ width: `${100 / 7}%` }}
        backIconStyle={{
          width: 20,
          height: 20,
          resizeMode: 'center',
          tintColor: '#808e9b'
        }}
        nextIconStyle={{
          width: 20,
          height: 20,
          resizeMode: 'center',
          tintColor: '#4bcffa'
        }}
        eachMonthStyle={{
          width: `${88 / 3}%`,
          height: `${88 / 4}%`,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#4bcffa',
          marginBottom: '3%',
          borderRadius: 10,
          elevation: 3
        }}
        eachMonthTextStyle={{
          fontFamily: 'Vazir-FD',
          fontSize: 16,
          color: 'white'
        }}
        weekdaysContainerStyle={{ height: '10%' }}
        weekdayStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        weekdayTextStyle={{
          fontFamily: 'Vazir-FD',
          fontSize: 16,
          color: '#808e9b',
          marginBottom: 5
        }}
        borderColor='#4bcffa'
        dayStyle={{
          width: `${100 / 7}%`,
          justifyContent: 'center',
          alignItems: 'center',
          aspectRatio: 1 / 1
        }}
        selectedDayStyle={{
          width: '70%',
          aspectRatio: 1 / 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100
        }}
        selectedDayColor='#4bcffa'
        dayTextStyle={{ fontFamily: 'Vazir-FD', fontSize: 18 }}
        selectedDayTextColor='white'
        dayTextColor='#4bcffa'
        disabledTextColor='#4bcffa66'
      />
    </View>
  </>
);

export default App;
