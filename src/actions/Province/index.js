export const GET_PROVINCE_SUCCESS = 'GET_PROVINCE_SUCCESS';
export const GET_PROVINCE_FAILURE = 'GET_PROVINCE_FAILURE';

const host = process.env.REACT_APP_GEOLOCATION_API;

export function fetchGetProvince() {
  return async dispatch => {
    try {
      const res = await fetch(`${host}/Provinces`);
      const data = await res.json();
      if (res.status === 200) {
        return dispatch({
          type: GET_PROVINCE_SUCCESS,
          data,
          status: res.status,
        });
      } else if (res.status === 401) {
        // redirect url
        // return FNRedirect(`${urlLogin}/logout`);
      } else if (res.status === 500 || res.status === 502) {
        // redirect url
        // return FNRedirect('/warning');
      } else {
        return dispatch({
          type: GET_PROVINCE_FAILURE,
          data: null,
          status: res.status ? res.status : res,
        });
      }
    } catch (err) {
      return dispatch({
        type: GET_PROVINCE_FAILURE,
        data: null,
        status: err.status ? err.status : err,
      });
    }
  };
}
