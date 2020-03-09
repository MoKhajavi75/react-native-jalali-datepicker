import { today, lastYear, nextYear } from './utils';

export const DEFAULT_PROPS = {
  // Date Picker
  style: {
    width: '95%',
    height: '80%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    elevation: 4
  },
  selected: today(),
  dateSeparator: '/',
  minDate: lastYear(),
  maxDate: nextYear(),
  onDateChange: date => console.warn(date),

  // Header
  headerContainerStyle: { height: '15%' },
  yearMonthBoxStyle: {
    width: '30%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10
  },
  yearMonthTextStyle: { fontSize: 22, color: 'black' },
  iconContainerStyle: { width: `${100 / 7}%` },
  backIcon: require('./icons/01.png'),
  backIconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    tintColor: 'black'
  },
  nextIcon: require('./icons/02.png'),
  nextIconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    tintColor: 'coral'
  },

  // Years
  eachYearStyle: {
    width: 110,
    height: 82,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4bcffa',
    marginTop: '1.5%',
    marginBottom: 5,
    marginHorizontal: '1.5%',
    borderRadius: 10,
    elevation: 3
  },
  eachYearTextStyle: { fontSize: 16, color: 'white' },

  // Months
  eachMonthStyle: {
    width: `${88 / 3}%`,
    height: `${88 / 4}%`,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral',
    marginBottom: '3%',
    borderRadius: 10,
    elevation: 3
  },
  eachMonthTextStyle: { fontSize: 16, color: 'white' },

  // Weekdays
  weekdaysContainerStyle: { height: '10%' },
  weekdayStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  weekdayTextStyle: { fontSize: 16, color: 'black', marginBottom: 5 },
  borderColor: 'coral',

  // Days
  dayStyle: {
    width: `${100 / 7}%`,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1 / 1
  },
  selectedDayStyle: {
    width: '70%',
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  selectedDayColor: 'coral',
  dayTextStyle: { fontSize: 18 },
  selectedDayTextColor: '#FFFFFF',
  dayTextColor: '#111111',
  disabledTextColor: '#999999'
};
