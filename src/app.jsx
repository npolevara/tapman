import React from 'react';
import Theme from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/RaisedButton';
import './style/app.less';

import tapEvent from 'react-tap-event-plugin';
tapEvent();

const App = React.createClass({
  render: function() {
    return(
      <div className="app">
        <Button 
          label="Login"
          className="login-button"
          onClick={this.handleLogIn} />
      </div>
    );
  }
});

var AppWithTheme = () => (
  <Theme>
    <App />
  </Theme>
);

export default AppWithTheme;