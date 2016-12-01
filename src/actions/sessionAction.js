import appDispatcher from '../dispatcher/appDispatcher.js';
import appConstants from '../stores/sessionStore.js';

import api from '../api';


const sessionActions = {
  authorize(immediate = false, callback) {
    api.authorize({ immediate })
    .then(() => {
      appDispatcher.dispatch({
        type: appConstants.SESSION_AUTHORIZE_SUCCESS
      });

      if (callback) callback();
    })
    .catch((err) => {
      appDispatcher.dispatch({
        type: appConstants.SESSION_AUTHORIZE_FAIL,
        error: err
      });

      if (callback) callback();
    });
  }
};
export default sessionActions;