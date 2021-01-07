import commonConstant from '../../common/commonConstant';

export const loading = (state, action) => {
  switch (action.type) {
    case commonConstant.LOADING_GLOBAL_SHOW:
      return Object.assign({}, state, { ...action });
    case commonConstant.LOADING_GLOBAL_HIDE:
      return Object.assign({}, state, { ...action });
    default:
      return state ? state : {};
  }
};


export const callAPI = (state, action) => {
  switch (action.type) {
    case commonConstant.CALL_API_SUCCESS:
      return Object.assign({}, state, { ...action });
    case commonConstant.CALL_API_FAILURE:
      return Object.assign({}, state, { ...action });
    case commonConstant.CALL_API_CANCEL:
      return Object.assign({}, state, { ...action });
    default:
      return state ? state : {};
  }
};
