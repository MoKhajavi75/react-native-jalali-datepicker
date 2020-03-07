import { PureComponent } from 'react';
import { StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';

export interface Props {
  // Date Picker
  /**
   * @required
   * Calendar container style
   */
  style: StyleProp<ViewStyle>;

  /**
   * Selected date
   */
  selected?: string;

  /**
   * Date separator character, can be anything like `/`, `-`, etc
   */
  dateSeparator?: string;

  /**
   * Minimum date to be picked
   */
  minDate?: string;

  /**
   * Maximum date to be picked
   */
  maxDate?: string;

  /**
   * @required
   * On date change callback
   */
  onDateChange: Function;

  // Header
  /**
   * Header style which contains arrows and year-month
   */
  headerContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Year - Month text style
   */
  yearMonthTextStyle?: StyleProp<TextStyle>;

  /**
   * Icons container style
   */
  iconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Path to back icon
   */
  backIcon?: string;

  /**
   * Back icon style
   */
  backIconStyle?: StyleProp<ImageStyle>;

  /**
   * Path to next icon
   */
  nextIcon?: string;

  /**
   * Next icon style
   */
  nextIconStyle?: StyleProp<ImageStyle>;

  // Months
  /**
   * Each month box style in month selector
   */
  eachMonthStyle?: StyleProp<ViewStyle>;

  /**
   * Each month text style in month selector
   */
  eachMonthTextStyle?: StyleProp<TextStyle>;

  // Weekdays
  /**
   * Top row style which contains weekdays
   */
  weekdaysContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Each weekday style
   */
  weekdayStyle?: StyleProp<ViewStyle>;

  /**
   * Each weekday text style
   */
  weekdayTextStyle?: StyleProp<TextStyle>;

  /**
   * Bottom border's color
   */
  borderColor?: string;

  // Days
  /**
   * Each day style in calendar
   */
  dayStyle?: StyleProp<ViewStyle>;

  /**
   * Selected day style
   */
  selectedDayStyle?: StyleProp<ViewStyle>;

  /**
   * Selected day color
   */
  selectedDayColor?: string;

  /**
   * Each day text style
   */
  dayTextStyle?: StyleProp<TextStyle>;

  /**
   * Selected day text color
   */
  selectedDayTextColor?: string;

  /**
   * Normal days text color
   */
  dayTextColor?: string;

  /**
   * Disabled days text color
   */
  disabledTextColor?: string;
}

export class DatePicker extends PureComponent<Props> {}
