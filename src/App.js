import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { setLanguage, fetchGetUser } from './actions';

function App(props) {
  const th = () => {
    props.dispatch(setLanguage('th'));
    props.dispatch(setLanguage('th'));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={th}>click</button>
        <button onClick={() => props.dispatch(setLanguage('en'))}>click</button>
        <button onClick={() => props.dispatch(fetchGetUser())}>get user</button>
      </header>
    </div>
  );
}

const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps)(App);
