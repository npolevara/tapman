import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import sessionActions from './actions/sessionAction.js';

import Taskman from './app.jsx';
import Login from './components/loginPage.jsx';

import api from './api';

window.googleApi = () => {
  sessionActions.authorize(true, renderApp);
};

function renderApp() {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/login' component={Login}>
        <Route path='/' component={Taskman} />
      </Route>
    </Router>, document.getElementById('mount-point')
  );
}

