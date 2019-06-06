import {
  GET_PROVINCE_SUCCESS,
  GET_PROVINCE_FAILURE,
} from '../../actions';

export function getProvince(state = {}, action) {
  switch (action.type) {
    case GET_PROVINCE_SUCCESS:
      return Object.assign({}, state, { ...action });
    case GET_PROVINCE_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
}
