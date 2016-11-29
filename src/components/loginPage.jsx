import React from 'react';

import '../style/loginPage.less'

const style = {
  margin: 12,
};

const loginPage = React.createClass({
  handleLogin() {
    console.log('Login clicked');
  },

  render() {
    return (
      <div className='loginPage'>
        Login Page
      </div>
    );
  }
});

export default loginPage;