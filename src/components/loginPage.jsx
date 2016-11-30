import React from 'react';
import Theme from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/RaisedButton';
import '../style/loginPage.less';

const style = {
  margin: 12,
};

const Login = React.createClass({
  handleLogin() {
    console.log('Login clicked');
  },

  render() {
    return (
      <div className='loginPage'>
        <div className='loginPage_banner'>
          <div className='loginPage_text'>
            <h1>Taskman</h1>
            <p>Organise your life!</p>
            <Button 
              label="Login"
              className="login-button"
              onClick={this.handleLogin}
            />
          </div>
          <img 
            src='../img/desk.jpg'
            className='loginPage_image'
          />
        </div>
      </div>
    );
  }
});

var loginPage = () => (
  <Theme>
    <Login />
  </Theme>
);

export default loginPage;