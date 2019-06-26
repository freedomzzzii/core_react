import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import {
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

import './CSCalendarRange.css';

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

export default class CSCalendarRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date(),
      show: false,
      fromMonth: props.fromMonth,
      toMonth: props.toMonth,
      from: props.from ? props.from : undefined,
      to: props.to ? props.to : undefined,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { show, from, to } = this.state;

    if (prevState.show && !show && (from || to)) {
      this.props.handleDate(from, to);
    }
  }

  handaleCalendar = () => this.setState({ show: !this.state.show });

  handleYearMonthChange = month => this.setState({ month });

  handleResetCalendar = () => {
    const { from, to } = this.state;
    this.setState({ show: false, from: undefined, to: undefined });
    if (from || to) {
      this.props.handleDate(undefined);
    }
  }

  handleDayClick = (day, modifiers = {}) => {
    if (modifiers.disabled) {
      return;
    }
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState({ ...range });
  }

  render() {
    const {
      show,
      month,
      fromMonth,
      toMonth,
      from,
      to,
    } = this.state;
    const { placeholder, disabledDays, className } = this.props;
    const modifiers = { start: from, end: to };
    
    if (!fromMonth && !toMonth) {
      return (<Loading />);
    }

    return(
      <div className={`CSCalendarRange${className ? ` ${className}` : ''}`}>
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
                  from || to ?
                    <span className="cs-placeholder-value">{from ? formatDate(from) : ''}{to ? ` - ${formatDate(to)}` : ''}</span>
                    : <span className="cs-placeholder">{placeholder}</span>
                }
              </span>
            </div>
          </DropdownToggle>
          <DropdownMenu className="cs-calendar" right>
            <DayPicker
              className={from && to ? 'Selectable' : ''}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
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
            from || to ?
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

CSCalendarRange.propTypes = {
  handleDate: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  fromMonth: PropTypes.object.isRequired,
  toMonth: PropTypes.object.isRequired,
  disabledDays: PropTypes.array,
  className: PropTypes.string,
  from: PropTypes.any.isRequired,
  to: PropTypes.any.isRequired,
};
