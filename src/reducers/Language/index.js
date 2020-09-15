import commonConstant from '../../common/commonConstant';

export const language = (state, action) => {
  switch (action.type) {
    case commonConstant.SET_LANGUAGE:
      return Object.assign({}, state, { ...action });
    default:
      return state ? state : {};
  }
};
