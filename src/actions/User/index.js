import commonConstant from '../../common/commonConstant';

export const fetchGetUser = data => ({
  'type': commonConstant.GET_USER,
  'pathAPI': '/users',
  data,
});
