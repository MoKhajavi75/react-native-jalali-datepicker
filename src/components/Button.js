import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = memo(({ title, disabled, onPress, style, textStyle }) => (
  <TouchableOpacity
    style={[style, { opacity: disabled ? 0.5 : 1 }]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
));

export { Button };
