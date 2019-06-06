import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import './App.css';

// layout

// component
import { TemplateCSS } from './pages';

const NotMatch = () => <Redirect to="/template-css"/>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-fluid">
            <Switch>
              <Route sensitive strict exact path="/template-css" component={TemplateCSS} />
              <Route sensitive strict exact component={NotMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
