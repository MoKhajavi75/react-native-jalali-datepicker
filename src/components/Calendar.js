import React, { memo } from 'react';
import { FlatList, I18nManager } from 'react-native';
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
    disabledTextColor,
    onDateSelect
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
      onDateChange(fullDate(year, month, day, dateSeparator));
    const onSelect = day => () =>
      onDateSelect(fullDate(year, month, day, dateSeparator));
    const renderDay = ({ item }) => (
      <Day
        item={item}
        isSelected={isSelected(item)}
        onDateChange={onChange(item)}
        onDateSelect={onSelect(item)}
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
        style={{
          flex: 1,
          transform: [{ rotateY: I18nManager.isRTL ? '360deg' : '180deg' }]
        }}
        data={getDays(year, month)}
        renderItem={renderDay}
        keyExtractor={item => `${year}/${month}/${item}`}
        numColumns={7}
      />
    );
  }
);

export { Calendar };
