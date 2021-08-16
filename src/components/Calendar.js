import React, { memo } from 'react';
import { FlatList } from 'react-native';
import { Day } from './Day';
import { fullDate, getDays, isBefore, isAfter } from '../utils';

const Calendar = memo(
  ({
    year,
    month,
    selected,
    onDateChange,
    dateSeparator,
    minDate,
    maxDate,
    dayStyle,
    selectedDayStyle,
    selectedDayColor,
    dayTextStyle,
    selectedDayTextColor,
    dayTextColor,
    disabledTextColor
  }) => {
    const isSelected = day =>
      selected == fullDate(year, month, day, dateSeparator);

    const isDisabled = day => {
      const today = fullDate(year, month, day, dateSeparator);
      return (
        isBefore(today, minDate, dateSeparator) ||
        isAfter(today, maxDate, dateSeparator)
      );
    };

    const onChange = day => () =>
      onDateChange(fullDate(year, month + 1, day, dateSeparator));

    const renderDay = ({ item }) => (
      <Day
        item={item}
        isSelected={isSelected(item)}
        onDateChange={onChange(item)}
        disabled={isDisabled(item)}
        dayStyle={dayStyle}
        selectedDayStyle={selectedDayStyle}
        selectedDayColor={selectedDayColor}
        dayTextStyle={dayTextStyle}
        selectedDayTextColor={selectedDayTextColor}
        dayTextColor={dayTextColor}
        disabledTextColor={disabledTextColor}
      />
    );

    return (
      <FlatList
        style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}
        data={getDays(year, month)}
        renderItem={renderDay}
        keyExtractor={item => `${year}/${month}/${item}`}
        numColumns={7}
      />
    );
  }
);

export { Calendar };
