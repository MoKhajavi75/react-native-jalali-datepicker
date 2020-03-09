import React, { PureComponent } from 'react';
import { View, Platform, UIManager, LayoutAnimation } from 'react-native';
import {
  Header,
  Weekdays,
  Calendar,
  MonthSelector,
  YearSelector
} from './components';
import { DEFAULT_PROPS } from './props';

class DatePicker extends PureComponent {
  static defaultProps = DEFAULT_PROPS;

  constructor(props) {
    super(props);

    this.state = {
      year: parseInt(props.selected.split(props.dateSeparator)[0]),
      month: parseInt(props.selected.split(props.dateSeparator)[1]),
      date: props.selected,
      mode: 'calendar'
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    this.minYear = parseInt(props.minDate.split(props.dateSeparator)[0]);
    this.minMonth = parseInt(props.minDate.split(props.dateSeparator)[1]);
    this.maxYear = parseInt(props.maxDate.split(props.dateSeparator)[0]);
    this.maxMonth = parseInt(props.maxDate.split(props.dateSeparator)[1]);
  }

  componentDidUpdate() {
    // TODO: use animated
    LayoutAnimation.easeInEaseOut();
  }

  renderContent() {
    const { mode } = this.state;

    switch (mode) {
      case 'calendar':
        return (
          <>
            {this.renderWeekdays()}
            {this.renderCalendar()}
          </>
        );

      case 'month':
        return this.renderMonths();

      case 'year':
        return this.renderYears();
    }
  }

  renderHeader() {
    const { year, month, mode } = this.state;
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

    const changeModeTo = mode => this.setState({ mode });

    const changeYear = increase => () =>
      this.setState(state => ({
        year: increase ? state.year + 1 : state.year - 1,
        month: 1
      }));

    const changeMonth = increase => () =>
      this.setState(state => {
        if (increase) {
          if (month == 12) {
            return { year: state.year + 1, month: 1 };
          }
          return { month: state.month + 1 };
        }

        if (month == 1) {
          return { year: state.year - 1, month: 12 };
        }
        return { month: state.month - 1 };
      });

    return (
      <Header
        dateSeparator={dateSeparator}
        containerStyle={headerContainerStyle}
        yearMonthBoxStyle={yearMonthBoxStyle}
        borderColor={borderColor}
        mode={mode}
        changeModeTo={changeModeTo}
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
    const onMonthChange = month => this.setState({ month, mode: 'calendar' });

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

  renderYears() {
    const { eachYearStyle, eachYearTextStyle } = this.props;
    const onYearChange = year => this.setState({ year, mode: 'month' });

    return (
      <YearSelector
        onYearChange={onYearChange}
        eachYearStyle={eachYearStyle}
        eachYearTextStyle={eachYearTextStyle}
        minYear={this.minYear}
        maxYear={this.maxYear}
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
    const { style } = this.props;

    return (
      <View style={style}>
        {this.renderHeader()}

        {this.renderContent()}
      </View>
    );
  }
}

export default DatePicker;
