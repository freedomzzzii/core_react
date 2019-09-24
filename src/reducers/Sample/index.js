import commonConstant from '../../common/commonConstant';

export const getPosts = (state = {}, action) => {
  switch (action.type) {
    case commonConstant.GET_POSTS_SUCCESS:
      return { ...state, ...action };
    case commonConstant.GET_POSTS_FAILURE:
      return { ...state, ...action };
    default:
      return state;
  }
};
