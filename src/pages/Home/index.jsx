import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

import commonConstant from '../../common/commonConstant';
import { setLanguage } from '../../actions';
import { Button } from '../../components';

const Home = props => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.getElementById('count-effect').innerText = `count(useEffect): ${count}`;
  }, [count]); // Optimizing Performance by Skipping Effects

  const [count1, setCount1] = useState(0);
  useEffect(() => {
    document.getElementById('count1-effect').innerText = `count1(useEffect): ${count1}`;
  });

  return (
    <div className="Home">
      <div className="title">Home</div>
      <Link to={commonConstant.pathLogout}>logout</Link>
      <header className="App-header">
        <img src={commonConstant.logoImage} className="App-logo" alt="logo" />
        <div>language: {props.language}</div>
        <div>
          <Button onClick={() => props.dispatch(setLanguage(commonConstant.languageTH))}>set language th</Button>
          <Button onClick={() => props.dispatch(setLanguage(commonConstant.languageEN))}>set language en</Button>
        </div>
        <div>count: {count}</div>
        <div id="count-effect">count(useEffect): </div>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
        <Button onClick={() => setCount(count - 1)}>-1</Button>
        <div>count1: {count1}</div>
        <div id="count1-effect">count1(useEffect): </div>
        <Button onClick={() => setCount1(count1 + 1)}>+1</Button>
        <Button onClick={() => setCount1(count1 - 1)}>-1</Button>
      </header>
    </div>
  );
};

Home.propTypes = {
  'dispatch': PropType.func.isRequired,
  'language': PropType.string,
};

Home.defaultProps = {
  'language': 'this is default props language',
};

const mapStateToProps = ({ language }) => ({ 'language': language.data });

export default connect(mapStateToProps)(Home);
