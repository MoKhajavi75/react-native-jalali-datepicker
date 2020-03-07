import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Month = memo(
  ({ title, disabled, selectMonth, eachMonthStyle, eachMonthTextStyle }) => (
    <TouchableOpacity
      style={[eachMonthStyle, { opacity: disabled ? 0.5 : 1 }]}
      onPress={selectMonth}
      disabled={disabled}
    >
      <Text style={eachMonthTextStyle}>{title}</Text>
    </TouchableOpacity>
  )
);

export { Month };
