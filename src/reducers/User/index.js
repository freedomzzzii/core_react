import commonConstant from '../../common/commonConstant';

export const getUser = (state, action) => {
  console.log('getUser>>>');
  switch (action.type) {
    case commonConstant.GET_USER:
      return Object.assign({}, state, { ...action });
    default:
      return state ? state : {};
  }
};
