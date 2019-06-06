import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import {
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

import './CSCalendar.css';

import { Loading } from '../../components';
import { formatDate } from '../FNFormatString/FNFormatString';

const MONTHS = [
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายน',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤศจิกายน',
  'ธันวาคม',
];
const WEEKDAYS_SHORT = ['อา', 'จัน', 'อัง', 'พุธ', 'พฤ', 'ศุก', 'เสา'];

class YearMonthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: props.localeUtils.getMonths(),
      years: this.handleYear(),
    };
  }

  handleYear = () => {
    const { fromMonth, toMonth } = this.props;
    const years = [];
    for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
      years.push(i);
    }
    return years;
  }

  handleChange = e => {
    const { year, month } = e.target.form;
    this.props.onChange(new Date(year.value, month.value));
  };

  render() {
    const { date } = this.props;

    return (
      <form className="DayPicker-Caption">
        <select className="custom-select cs-select-month" name="month" onChange={this.handleChange} value={date.getMonth()}>
          {
            this.state.months.map((month, i) => (
              <option key={month} value={i}>
                {MONTHS[i]}
              </option>
            ))
          }
        </select>
        <select className="custom-select cs-select-year" name="year" onChange={this.handleChange} value={date.getFullYear()}>
          {
            this.state.years.map(year => (
              <option key={year} value={year}>
                {year + 543}
              </option>
            ))
          }
        </select>
      </form>
    );
  }
}

YearMonthForm.propTypes = {
  localeUtils: PropTypes.shape({
    getMonths: PropTypes.func.isRequired,
  }).isRequired,
  fromMonth: PropTypes.shape({}).isRequired,
  toMonth: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  date: PropTypes.shape({}).isRequired,
};

export default class CSCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date(),
      selectedDay: new Date(),
      inputValue: props.inputValue ? props.inputValue : undefined,
      show: false,
      fromMonth: props.fromMonth,
      toMonth: props.toMonth,
    };
  }

  handaleCalendar = () => this.setState({ show: !this.state.show });

  handleYearMonthChange = month => this.setState({ month });

  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
      inputValue: selected ? undefined : day,
      show: false,
    });
    this.props.handleDate(selected ? undefined : day);
  }

  handleResetCalendar = () => {
    const { inputValue } = this.state;
    if (inputValue) {
      this.setState({ inputValue: undefined, show: false });
      this.props.handleDate(undefined);
    } else {
      this.handaleCalendar();
    }
  }

  render() {
    const {
      inputValue,
      show,
      month,
      fromMonth,
      toMonth,
    } = this.state;
    const { placeholder, disabledDays, className } = this.props;
    
    if (!fromMonth && !toMonth) {
      return (<Loading />);
    }

    return(
      <div className={`CSCalendar${className ? ` ${className}` : ''}`}>
        <ButtonDropdown direction="down" className="cs-input" isOpen={show} toggle={this.handaleCalendar}>
          <DropdownToggle
            className="form-control cs-input"
            id=""
            tag="div"
            onClick={this.handaleCalendar}
            data-toggle="dropdown"
            aria-expanded={show}
          >
            <div className="cs-placeholder-box">
              <span className="cs-value">
                {
                  inputValue ?
                    <span>{formatDate(inputValue)}</span>
                    : <span className="cs-placeholder">{placeholder}</span>
                }
              </span>
            </div>
          </DropdownToggle>
          <DropdownMenu className="cs-calendar" right>
            <DayPicker
              month={month}
              fromMonth={fromMonth}
              toMonth={toMonth}
              onDayClick={this.handleDayClick}
              weekdaysShort={WEEKDAYS_SHORT}
              captionElement={({ date, localeUtils }) => (
                <YearMonthForm
                  date={date}
                  localeUtils={localeUtils}
                  onChange={this.handleYearMonthChange}
                  fromMonth={fromMonth}
                  toMonth={toMonth}
                />
              )}
              disabledDays={disabledDays}
            />
          </DropdownMenu>
        </ButtonDropdown>
        <Button className="calendar-btn" onClick={this.handleResetCalendar} id="btn-calendar">
          {
            inputValue ?
              <span key="true">
                <i className="fas fa-times icon"></i>
              </span>
              : <span key="false">
                <i className="far fa-calendar-alt gray icon"></i>
              </span>
          }
        </Button>
      </div>
    );
  }
}

CSCalendar.propTypes = {
  inputValue: PropTypes.any,
  handleDate: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  fromMonth: PropTypes.object.isRequired,
  toMonth: PropTypes.object.isRequired,
  disabledDays: PropTypes.array,
  className: PropTypes.string,
};
