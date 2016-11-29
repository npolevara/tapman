import React from 'react';
import { Link } from 'react-router';

import './style/app.less';

import tapEvent from 'react-tap-event-plugin';
tapEvent();

const App = React.createClass({
  render: function() {
    return(
      <div className="app">
        App--App
      </div>
    );
  }
});
export default App;