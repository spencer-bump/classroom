import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Subject from './Subject';
import Instructor from './Instructor';
import Homework from './Homework';
import history from '../history';
import './Components.css';

class App extends React.Component {

  render () {
    return (
      <div className="ui container">
        <Router history={history}>
          <Header />
          <div className="ui container grid">
            <div className="ten wide column">
              <Switch>
                <Route
                  path="/" exact
                  component={Subject} />
                <Route
                  path="/instructor"
                  component={Instructor} />
                <Route
                  path="/homework"
                  component={Homework} />
              </Switch>
            </div>
            <div className="six wide column ">
              <Sidebar />
            </div>
          </div>
        </Router>
      </div>
    )
  }

}

export default App;