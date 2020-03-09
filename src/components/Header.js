import React, { memo } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { toPersian } from '../utils';

const Header = memo(
  ({
    mode,
    dateSeparator,
    containerStyle,
    changeModeTo,
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
      if (mode === 'year') {
        return null;
      }

      const disabled = () => {
        if (mode === 'month') {
          return isBack ? year <= minYear : year >= maxYear;
        }
        return isBack
          ? year == minYear && month <= minMonth
          : year == maxYear && month >= maxMonth;
      };

      const onBackIconPress = () => {
        if (mode === 'month') {
          return decreaseYear();
        }
        decreaseMonth();
      };

      const onNextIconPress = () => {
        if (mode === 'month') {
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

    const renderTitle = () => {
      if (mode === 'calendar') {
        return (
          <Text style={yearMonthTextStyle}>
            {toPersian(year) + dateSeparator + toPersian(month)}
          </Text>
        );
      }

      return <Text style={yearMonthTextStyle}>{toPersian(year)}</Text>;
    };

    const onYearMonthPress = () => {
      if (mode === 'calendar') {
        return changeModeTo('month');
      }

      return changeModeTo(mode === 'year' ? 'month' : 'year');
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
          {renderTitle()}
        </TouchableOpacity>

        {renderIcon(nextIcon)}
      </View>
    );
  }
);

export { Header };
