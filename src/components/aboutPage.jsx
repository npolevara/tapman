import React from 'react';
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';
import '../style/aboutPage.less';

const aboutPage = React.createClass({
  render() {
    return(
      <div className='aboutPage'>
        <Paper
          zDepth={1}
          className='aboutPage_content'
        >
          <h2>Taskman on line</h2>
          <p>This helper is based on</p>
          <Link href='https://developers.google.com/google-app'>Google Task API</Link>
          using material design pack.
          <p>This is my first helper written on ReactJs</p>
        </Paper>
      </div>
    );
  }
});

export default aboutPage;