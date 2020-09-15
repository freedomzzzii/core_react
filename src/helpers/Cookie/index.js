import commonConstant from '../../common/commonConstant';
import { validateHTTPS, validateHaveCookieName } from '../../helpers';

export const createCookie = (name, value, hr) => {
  try {
    if (name && value) {
      const dt = new Date();

      if (hr) {
        dt.setTime(dt.getTime() + (3600000 * hr)); // 3600000 millisecond = 1 hr
      } else {
        dt.setTime(dt.getTime() + 3600000);
      }

      return document.cookie = `${name}=${value}; expires=${hr ? dt.toUTCString() : ''}; domain=${commonConstant.envCookie ? commonConstant.envCookie : ''}; path=/${validateHTTPS(window.location.href) ? '; secure' : ''}`;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getCookie = name => {
  try {
    if (name) {
      const parts = `; ${document.cookie}`.split(`; ${name}=`);

      if (parts.length === 2) {
        return parts.pop().split(';').shift();
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const deleteCookie = name => {
  try {
    if (name && validateHaveCookieName(name)) {
      return document.cookie = `${name}=; expires=${new Date(new Date().setDate(new Date().getDate() - 1)).toUTCString()}; domain=${commonConstant.envCookie ? commonConstant.envCookie : ''}; path=/${validateHTTPS(window.location.href) ? '; secure' : ''}`;
    }
    return null;
  } catch (error) {
    return null;
  }
};
