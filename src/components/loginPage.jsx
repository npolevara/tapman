import React from 'react';


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