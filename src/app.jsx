import React from 'react';
import Theme from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';

import './style/app.less';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default React.createClass({
    render() {
      return (
        <Theme>
          <div className="app">
            <ul role="nav">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            {this.props.children}
          </div>
        </Theme>
      );
    }
});

