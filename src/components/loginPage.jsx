import React from 'react';
import sessionAction from '../actions/sessionAction';
import sessionStore from '../stores/sessionStore';
import Button from 'material-ui/RaisedButton';

import '../style/loginPage.less';

const style = {
  margin: 12,
};

function getStateFromFlux() {
  return {
    isLoggedIn: sessionStore.isLoggedIn()
  };
}


export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return getStateFromFlux();
  },

  componentDidMount() {
    sessionStore.addChangeListener(this.onChange);
  },

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isLoggedIn) {
      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname);
      } else {
        this.context.router.replace('/lists');
      }
    }
  },

  componentWillUnmount() {
    sessionStore.removeChangeListener(this.onChange);
  },

  handleLogin() {
    sessionAction.authorize();
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
  },

  onChange() {
    this.setState(getStateFromFlux());
  }

});