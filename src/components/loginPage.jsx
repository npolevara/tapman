import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import '../style/loginPage.less'


const loginPage = React.createClass({
  handleLogin() {
    console.log('Login clicked');
  },

  render() {
    return (
      <div className='loginPage'>
        Login Page
        <RaisedButton />
      </div>
    );
  }
});

export default loginPage;