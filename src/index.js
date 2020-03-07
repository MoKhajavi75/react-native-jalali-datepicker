import React, { PureComponent } from 'react';
import { View, Platform, UIManager, LayoutAnimation } from 'react-native';
import { Header, Weekdays, Calendar, MonthSelector } from './src';
import { DEFAULT_PROPS } from './props';

class DatePicker extends PureComponent {
  static defaultProps = DEFAULT_PROPS;

  constructor(props) {
    super(props);

    this.state = {
      year: parseInt(props.selected.split(props.dateSeparator)[0]),
      month: parseInt(props.selected.split(props.dateSeparator)[1]),
      date: props.selected,
      isSelectingMonth: false
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    this.minYear = props.minDate.split(props.dateSeparator)[0];
    this.minMonth = props.minDate.split(props.dateSeparator)[1];
    this.maxYear = props.maxDate.split(props.dateSeparator)[0];
    this.maxMonth = props.maxDate.split(props.dateSeparator)[1];
  }

  componentDidUpdate() {
    // TODO: use animated
    LayoutAnimation.easeInEaseOut();
  }

  renderHeader() {
    const { year, month, isSelectingMonth } = this.state;
    const {
      dateSeparator,
      headerContainerStyle,
      yearMonthTextStyle,
      iconContainerStyle,
      backIcon,
      backIconStyle,
      nextIcon,
      nextIconStyle,
      borderColor,
      yearMonthBoxStyle
    } = this.props;

    const changeYear = increase => () =>
      this.setState(state => {
        if (increase) {
          return { year: +state.year + 1, month: 1 };
        }

        if (state.year - 1 != this.minYear) {
          return { year: state.year - 1, month: 1 };
        }

        return { year: state.year - 1, month: +this.minMonth };
      });

    const changeMonth = increase => () =>
      this.setState(state => {
        if (increase) {
          if (month == 12) {
            return { year: state.year + 1, month: 1 };
          }
          return { month: +state.month + 1 };
        } else {
          if (month == 1) {
            return { year: state.year - 1, month: 12 };
          }
          return { month: state.month - 1 };
        }
      });

    return (
      <Header
        dateSeparator={dateSeparator}
        containerStyle={headerContainerStyle}
        yearMonthBoxStyle={yearMonthBoxStyle}
        borderColor={borderColor}
        isSelectingMonth={isSelectingMonth}
        onYearMonthPress={() =>
          this.setState(state => ({
            isSelectingMonth: !state.isSelectingMonth
          }))
        }
        yearMonthTextStyle={yearMonthTextStyle}
        iconContainerStyle={iconContainerStyle}
        backIcon={backIcon}
        backIconStyle={backIconStyle}
        year={year}
        month={month}
        nextIcon={nextIcon}
        nextIconStyle={nextIconStyle}
        increaseYear={changeYear(true)}
        decreaseYear={changeYear(false)}
        increaseMonth={changeMonth(true)}
        decreaseMonth={changeMonth(false)}
        minYear={this.minYear}
        minMonth={this.minMonth}
        maxYear={this.maxYear}
        maxMonth={this.maxMonth}
      />
    );
  }

  renderMonths() {
    const { year } = this.state;
    const { eachMonthStyle, eachMonthTextStyle } = this.props;
    const onMonthChange = month =>
      this.setState({ month, isSelectingMonth: false });

    return (
      <MonthSelector
        onMonthChange={onMonthChange}
        eachMonthStyle={eachMonthStyle}
        eachMonthTextStyle={eachMonthTextStyle}
        year={year}
        minYear={this.minYear}
        minMonth={this.minMonth}
        maxYear={this.maxYear}
        maxMonth={this.maxMonth}
      />
    );
  }

  renderWeekdays() {
    const {
      weekdaysContainerStyle,
      weekdayStyle,
      weekdayTextStyle,
      borderColor
    } = this.props;

    return (
      <Weekdays
        weekdaysContainerStyle={weekdaysContainerStyle}
        weekdayStyle={weekdayStyle}
        weekdayTextStyle={weekdayTextStyle}
        borderColor={borderColor}
      />
    );
  }

  renderCalendar() {
    const { year, month, date } = this.state;
    const {
      dateSeparator,
      minDate,
      maxDate,
      onDateChange,
      dayStyle,
      selectedDayStyle,
      selectedDayColor,
      dayTextStyle,
      selectedDayTextColor,
      dayTextColor,
      disabledTextColor
    } = this.props;
    const onChange = date => onDateChange(date);

    return (
      <Calendar
        year={year}
        month={month}
        selected={date}
        onDateChange={date => this.setState({ date }, onChange(date))}
        dateSeparator={dateSeparator}
        minDate={minDate}
        maxDate={maxDate}
        dayStyle={dayStyle}
        selectedDayStyle={selectedDayStyle}
        selectedDayColor={selectedDayColor}
        dayTextStyle={dayTextStyle}
        selectedDayTextColor={selectedDayTextColor}
        dayTextColor={dayTextColor}
        disabledTextColor={disabledTextColor}
      />
    );
  }

  render() {
    const { isSelectingMonth } = this.state;
    const { style } = this.props;

    return (
      <View style={style}>
        {this.renderHeader()}

        {isSelectingMonth ? (
          this.renderMonths()
        ) : (
          <>
            {this.renderWeekdays()}
            {this.renderCalendar()}
          </>
        )}
      </View>
    );
  }
}

export { DatePicker };
