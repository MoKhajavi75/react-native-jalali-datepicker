import React, { memo } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { toPersian } from '../utils';

const Header = memo(
  ({
    isSelectingMonth,
    dateSeparator,
    containerStyle,
    onYearMonthPress,
    yearMonthTextStyle,
    iconContainerStyle,
    backIcon,
    backIconStyle,
    year,
    month,
    nextIcon,
    nextIconStyle,
    decreaseYear,
    increaseYear,
    decreaseMonth,
    increaseMonth,
    minYear,
    maxYear,
    minMonth,
    maxMonth,
    borderColor,
    yearMonthBoxStyle
  }) => {
    const renderIcon = (icon, isBack = false) => {
      const disabled = () => {
        if (isSelectingMonth) {
          return isBack ? year <= minYear : year >= maxYear;
        }
        return isBack
          ? year == minYear && month <= minMonth
          : year == maxYear && month >= maxMonth;
      };

      const onBackIconPress = () => {
        if (isSelectingMonth) {
          return decreaseYear();
        }
        decreaseMonth();
      };
      const onNextIconPress = () => {
        if (isSelectingMonth) {
          return increaseYear();
        }
        increaseMonth();
      };

      return (
        <TouchableOpacity
          style={[
            {
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: disabled() ? 0.5 : 1
            },
            isBack
              ? { position: 'absolute', left: 5 }
              : { position: 'absolute', right: 5 },
            iconContainerStyle
          ]}
          disabled={disabled()}
          onPress={isBack ? onBackIconPress : onNextIconPress}
        >
          <Image source={icon} style={isBack ? backIconStyle : nextIconStyle} />
        </TouchableOpacity>
      );
    };

    return (
      <View
        style={[
          {
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          },
          containerStyle
        ]}
      >
        {renderIcon(backIcon, true)}

        <TouchableOpacity
          style={[{ borderColor: borderColor }, yearMonthBoxStyle]}
          onPress={onYearMonthPress}
        >
          <Text style={yearMonthTextStyle}>
            {isSelectingMonth
              ? `${toPersian(year)}`
              : `${toPersian(year)}${dateSeparator}${toPersian(month)}`}
          </Text>
        </TouchableOpacity>

        {renderIcon(nextIcon)}
      </View>
    );
  }
);

export { Header };
