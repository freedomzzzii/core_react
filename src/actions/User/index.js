import commonConstant from '../../common/commonConstant';

export const fetchGetUser = () => ({
  'type': commonConstant.GET_USER_REQUEST,
  'typeSuccess': commonConstant.GET_USER_SUCCESS,
  'typeFailure': commonConstant.GET_USER_FAILURE,
  'pathAPI': '/users',
});
