import commonConstant from './commonConstant';

import {
  createCookie,
  getCookie,
  deleteCookie,
} from '../helpers';

// cookie
const createCookieSample = value => createCookie(commonConstant.cookieSample, value);
const getCookieSample = () => getCookie(commonConstant.cookieSample) ? getCookie(commonConstant.cookieSample) : null;
const deleteCookieSample = () => deleteCookie(commonConstant.cookieSample);

export {
  // cookie
  createCookieSample,
  getCookieSample,
  deleteCookieSample,
};
