import React, { memo } from 'react';
import { View, Text, TouchableOpacity, I18nManager } from 'react-native';
import { toPersian } from '../utils';

const Day = memo(
  ({
    item,
    onDateChange,
    onDateSelect,
    isSelected,
    disabled,
    dayStyle,
    selectedDayStyle,
    selectedDayColor,
    dayTextStyle,
    selectedDayTextColor,
    dayTextColor,
    disabledTextColor
  }) => {
    const blank = item === '.';
    if (blank) {
      return <View style={dayStyle} />;
    }
    const setDate = () => {
      if (isSelected) {
        onDateSelect();
      } else {
        onDateChange();
        onDateSelect();
      }
    };
    return (
      <TouchableOpacity style={dayStyle} onPress={setDate}>
        <View
          style={[
            {
              backgroundColor: isSelected ? selectedDayColor : 'transparent'
            },
            selectedDayStyle
          ]}
        >
          <Text
            style={[
              {
                transform: [
                  { rotateY: I18nManager.isRTL ? '360deg' : '180deg' }
                ],
                color: disabled
                  ? disabledTextColor
                  : isSelected
                  ? selectedDayTextColor
                  : dayTextColor
              },
              dayTextStyle
            ]}
          >
            {toPersian(item)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

export { Day };
