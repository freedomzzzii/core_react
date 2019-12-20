import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.scss';

import commonConstant from './common/commonConstant';
import { fetchGetPosts } from './actions';
import { history } from './helpers';

class Test extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchGetPosts());
  }
  render() {
    return (
      <div>eiei</div>
    );
  }
}

Test.propTypes = {
  'dispatch': PropTypes.func.isRequired,
};

const Testcon = connect(({ getPosts }) => ({ getPosts }))(Test);

const Dummy = () => (
  <div className="App">
    <header className="App-header">
      <img src={commonConstant.reactIcon} className="App-logo" alt="logo" />
      <Testcon />
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
    </header>
  </div>
);

export default () => (
  <Router history={history}>
    <div className="App">
      <Switch>
        <Route sensitive strict exact path={commonConstant.pathHome} component={Dummy} />
        <Route sensitive strict exact component={Dummy} />
      </Switch>
    </div>
  </Router>
);
