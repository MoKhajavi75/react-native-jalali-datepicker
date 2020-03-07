import React from 'react';
import { View } from 'react-native';
import { MONTHS } from '../utils';
import { Month } from './index';

const MonthSelector = ({
  onMonthChange,
  year,
  minYear,
  minMonth,
  maxYear,
  maxMonth,
  eachMonthStyle,
  eachMonthTextStyle
}) => {
  const selectMonth = month => () => onMonthChange(month);

  const isDisabled = index => {
    if (year == minYear) {
      return index < minMonth;
    }

    if (year == maxYear) {
      return index > maxMonth;
    }

    return false;
  };

  const renderMonth = (item, index) => (
    <Month
      key={item}
      title={item}
      eachMonthStyle={eachMonthStyle}
      eachMonthTextStyle={eachMonthTextStyle}
      disabled={isDisabled(index + 1)}
      selectMonth={selectMonth(index + 1)}
    />
  );

  return (
    <View
      style={{
        width: '95%',
        height: '82.5%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'center',
        flexWrap: 'wrap'
      }}
    >
      {MONTHS.map(renderMonth)}
    </View>
  );
};

export { MonthSelector };
