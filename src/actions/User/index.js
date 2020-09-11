import commonConstant from '../../common/commonConstant';

export const fetchGetUser = data => {
  console.log('fetchGetUser>>>');
  return ({
    type: commonConstant.GET_USER,
    pathAPI: '/users',
    data,
  });
}