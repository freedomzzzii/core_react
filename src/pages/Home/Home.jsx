import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import commonConstant from '../../common/commonConstant';
import { setLanguage } from '../../actions';
import { Button } from '../../shared/components';
import { reducers } from '../../reducers'; 

import { GetUser , ListUser } from './components';

const initialStateRedux = {
  'language': { 'data': 'this is default props language' },
};

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect count>>>>', count);
    document.getElementById('count-effect').innerText = `count(useEffect): ${count}`;
  }, [count]); // Optimizing Performance by Skipping Effects pass [count] for washing state is change

  const [count1, setCount1] = useState(0);
  useEffect(() => {
    console.log('useEffect count1>>>>', count1);
    document.getElementById('count1-effect').innerText = `count1(useEffect): ${count1}`;
  }); // On this effect is call all state is change

  const [language, dispatch] = useReducer(reducers.language, initialStateRedux.language);

  return (
    <div className="Home">
      <div>---------- [useState, useEffect, useReducer] ----------</div>
      <div className="title">Home</div>
      <Link to={commonConstant.pathLogout}>logout</Link>
      <header className="App-header">
        <img src={commonConstant.logoImage} className="App-logo" alt="logo" />
        <div>language: {language.data}</div>
        <div>
          <Button onClick={() => dispatch(setLanguage(commonConstant.languageTH))}>set language th</Button>
          <Button onClick={() => dispatch(setLanguage(commonConstant.languageEN))}>set language en</Button>
        </div>
        <div>count: {count}</div>
        <div id="count-effect">count(useEffect): </div>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
        <Button onClick={() => setCount(count - 1)}>-1</Button>
        <div>count1: {count1}</div>
        <div id="count1-effect">count1(useEffect): </div>
        <Button onClick={() => setCount1(count1 + 1)}>+1</Button>
        <Button onClick={() => setCount1(count1 - 1)}>-1</Button>
        <GetUser />
        <ListUser />
      </header>
    </div>
  );
};

export default Home;
