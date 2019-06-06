import {
  getCookie,
  deleteCookie,
  createCookie,
} from './Cookie/Cookie';

import CSCalendar from './CSCalendar/CSCalendar';

import CSCarousel from './CSCarousel/CSCarousel';

import CSCheckbox from './CSCheckbox/CSCheckbox';

import CSModal from './CSModal/CSModal';

import CSRadio from './CSRadio/CSRadio';

import CSTable from './CSTable/CSTable';

import { sortNumber, sortTimeLeft, sortTime, sortAttr } from './FNSortCSTable/FNSortCSTable'; 

import {
  formatIDCard,
  validatePhoneNumber,
  formatPhoneNumber,
  checkIDCard,
  deleteDash,
  checkLengthNumber,
  validPatternPhone,
  formatPhone,
  changePhoneToThaiPattern,
  validateFormat,
  validateEmail,
  formatDate,
  formatDate2,
  formatDate3,
  formatDate4,
  formatDateTime,
  formatDateTimeLog,
  formatReceiveTime,
  formatTimeOrDate,
  formatTimeToGMT7,
  formatAddress,
} from './FNFormatString/FNFormatString';

import FNRedirect from './FNRedirect/FNRedirect';

import FNTimeLeft from './FNTimeLeft/FNTimeLeft';

import Icon from './Icon/Icon';

import UploadFile from './UploadFile/UpLoadFile';

import CSCalendarRange from './CSCalendarRange/CSCalendarRange';

import QueryString from './QueryString/QueryString';

export {
  // cookie
  getCookie,
  deleteCookie,
  createCookie,
  // calendar
  CSCalendar,
  CSCalendarRange,
  // carousel
  CSCarousel,
  // checkbox
  CSCheckbox,
  // modal
  CSModal,
  // radio btn
  CSRadio,
  // table
  CSTable,
  // func sort table
  sortNumber,
  sortTimeLeft,
  sortTime,
  sortAttr,
  // func format
  formatIDCard,
  validatePhoneNumber,
  formatPhoneNumber,
  checkIDCard,
  deleteDash,
  checkLengthNumber,
  validPatternPhone,
  formatPhone,
  changePhoneToThaiPattern,
  validateFormat,
  validateEmail,
  formatDate,
  formatDate2,
  formatDate3,
  formatDate4,
  formatDateTime,
  formatDateTimeLog,
  formatReceiveTime,
  formatTimeOrDate,
  formatTimeToGMT7,
  formatAddress,
  // func redirect
  FNRedirect,
  // time left
  FNTimeLeft,
  // icon
  Icon,
  // browse file
  UploadFile,
  // QueryString
  QueryString,
};
