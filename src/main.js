import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Router, Route, hashHistory } from 'react-router';

import app from './app.jsx';
import login from './components/loginPage.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={app} />
    <Route path='/login' component={login} />
  </Router>, document.getElementById('mount-point')
);

