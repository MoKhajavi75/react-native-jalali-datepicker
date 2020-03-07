import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { WEEKDAYS_INITIALS } from '../utils';

const Weekdays = memo(
  ({ weekdaysContainerStyle, weekdayStyle, weekdayTextStyle, borderColor }) => {
    const renderWeekdays = day => (
      <View
        key={day}
        style={[
          { borderBottomWidth: 1, borderBottomColor: borderColor },
          weekdayStyle
        ]}
      >
        <Text style={weekdayTextStyle}>{day}</Text>
      </View>
    );

    return (
      <View style={[{ flexDirection: 'row-reverse' }, weekdaysContainerStyle]}>
        {WEEKDAYS_INITIALS.map(renderWeekdays)}
      </View>
    );
  }
);

export { Weekdays };
