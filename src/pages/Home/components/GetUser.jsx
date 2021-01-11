import React from 'react';
import { useDispatch, useStore } from 'react-redux';

import { fetchGetUser } from '../../../actions';
import { Button } from '../../../shared/components';

const GetUser = () => {
  const dispatch = useDispatch();
  const store = useStore(); // This hook returns a reference to the same Redux store. This hook should probably not be used frequently. Prefer useSelector()

  console.log('store>>>', store);
  console.log('store getState>>>', store.getState())

  const handleGetUser = () => { // for test call api on twice but update state on redux on last action
    dispatch(fetchGetUser());
    dispatch(fetchGetUser());
  }

  return (
    <div className="GetUser">
      <div>---------- [useDispatch, useStore] ----------</div>
      <div>this component for call api with useDispatch and use useStore for view all state on reducer</div>
      <div>note. useStore: This hook returns a reference to the same Redux store. This hook should probably not be used frequently. Prefer useSelector()</div>
      <Button onClick={handleGetUser}>get User</Button>
    </div>
  );
};

export default  GetUser;
