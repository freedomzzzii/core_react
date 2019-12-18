import { createCookie, getCookie, deleteCookie } from './Cookie/Cookie';

import { validateHTTPS, validateHaveCookieName } from './Validate/Validate';

import history from './History/History';

export {
  // cookie
  createCookie,
  getCookie,
  deleteCookie,
  // validate
  validateHTTPS,
  validateHaveCookieName,
  // history
  history,
};
