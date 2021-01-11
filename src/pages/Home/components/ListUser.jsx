import React from 'react';
import { useSelector } from 'react-redux';

const ListUser = () => {
  const state = useSelector(state => state.getUser);
  
  if (!state || !state.data) { // or to do something
    return (
      <div className="ListUser">
        <div>---------- [useSelector] ----------</div>
        <div>this component is use useSelector for get state from redux</div>
      </div>
    );
  }

  return (
    <div className="ListUser">
      <div>---------- [useSelector] ----------</div>
      <div>this component is use useSelector for get state from redux</div>
      <ul>
        {state.data.map(ele => <li key={ele.id}>{ele.name}</li>)}
      </ul>
    </div>
  );
};

export default ListUser;
