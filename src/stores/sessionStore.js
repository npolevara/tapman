import appDispatcher from '../dispatcher/appDispatcher.js';
import appConstants from '../stores/sessionStore.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let isLoggedIn = false;

const sessionStore = Object.assign({}, EventEmitter.prototype, {
  isLoggedIn() {
    return isLoggedIn;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

appDispatcher.register(action => {
  console.info(action.type, action);

  switch(action.type) {
    case appConstants.SESSION_AUTHORIZE_SUCCESS: {
      isLoggedIn = true;

      sessionStore.emitChange();
      break;
    }

    case appConstants.SESSION_AUTHORIZE_FAIL: {
      isLoggedIn = false;

      sessionStore.emitChange();
      break;
    }

    default: {

    }
  }
});

export default sessionStore;