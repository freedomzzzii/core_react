import commonConstant from '../../common/commonConstant';

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const fetchGetPosts = () => (
  async dispatch => {
    try {
      const res = await fetch(`${commonConstant.envDomainSample}/posts`);
      const data = await res.json();

      if (res.status === 200) {
        return dispatch({
          'type': commonConstant.GET_POSTS_SUCCESS,
          data,
          'status': res.status,
        });
      } else if (res.status === 500 || res.status === 502) {
        // return history.push('/');
      }
      return dispatch({
        'type': commonConstant.GET_POSTS_FAILURE,
        'data': null,
        'status': res.status ? res.status : res,
      });
    } catch (err) {
      return dispatch({
        'type': commonConstant.GET_POSTS_FAILURE,
        'data': null,
        'status': err.status ? err.status : err,
      });
    }
  }
);
