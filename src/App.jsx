import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.scss';

import commonConstant from './common/commonConstant';
import { getCookieSample } from './common/commonFunction';
import { history } from './helpers';
import { setLanguage, fetchGetUser } from './actions';
import { Oops, Home, Logout } from './pages';

const PublicRoute = props => (
  props.restricted ?
    getCookieSample() ?
      <Route {...props} />
      : <Redirect to={commonConstant.pathLogout} />
    : <Route {...props} />
);

PublicRoute.propTypes = {
  'restricted': PropTypes.bool,
};

const App = () => (
  <Router history={history}>
    <div className="App">
      <Switch>
        <PublicRoute sensitive strict exact path={commonConstant.pathLogout} component={Logout} />
        <PublicRoute restricted sensitive strict exact path={commonConstant.pathHome} component={Home} />
        <PublicRoute sensitive strict exact component={Oops} />
      </Switch>
    </div>
  </Router>
);

const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps)(App);
