import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Mui from 'material-ui/styles/MuiThemeProvider';
import Taskman from './app.jsx';
import login from './components/loginPage.jsx';

const App = () => (
  <Mui>
    <Taskman />
  </Mui>
);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Taskman} />
    <Route path='/login' component={login} />
  </Router>, document.getElementById('mount-point')
);

