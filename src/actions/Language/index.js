import commonConstant from '../../common/commonConstant';

export const setLanguage = (data) => {
  console.log('setLanguage>>>')
  return ({ type: commonConstant.SET_LANGUAGE, data });
}