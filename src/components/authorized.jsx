import React from 'react';
import '../style/authorized.less';

const authorized = React.createClass({
  render(){
    return(
      <div className='authorized'>
        <div className='authorized_content'>
          {this.props.children}
        </div>
      </div>
    );
  }
});
export default authorized;