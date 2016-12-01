import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import sessionAction from './actions/sessionAction.js';
import sessionStore from './stores/sessionStore.js';

import Taskman from './app.jsx';
import Login from './components/loginPage.jsx';
import About from './components/aboutPage.jsx';
import Authorized from './components/authorized.jsx';

window.googleApi = () => {
  sessionAction.authorize(true, renderApp);
};

function requireAuth(nextState, replace) {
  if (!sessionStore.isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

function cons(){
  if (true) {
    console.log(`login: ${sessionStore.isLoggedIn()}`);
  }
}

function renderApp() {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Taskman} onEnter={cons}>
        <Route path='/login' component={Login} />
        <Route component={Authorized} onEnter={requireAuth}>
          <Route path='/about' component={About} />
        </Route>
      </Route>
    </Router>, document.getElementById('mount-point')
  );
}

