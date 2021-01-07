import commonConstant from '../../common/commonConstant';

export const getUser = (state, action) => {
  switch (action.type) {
    case commonConstant.GET_USER_SUCCESS:
      return Object.assign({}, state, { ...action });
    case commonConstant.GET_USER_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state ? state : {};
  }
};
