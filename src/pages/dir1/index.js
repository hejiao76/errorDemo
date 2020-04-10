

import React from 'react';
import { withRouter, connect } from 'umi';

@withRouter
@connect(({testmodel1,testmodel2,DDDD,testmodel5})=>{
  return {
    a:testmodel1.a,
    b:testmodel2.b,
    B:DDDD.B,
    d:testmodel5.a
  }
})
class DIR1 extends React.Component {
  componentDidMount() {
    console.log('did here');
    window.setTimeout(() =>{
      this.props.dispatch({
        type:'DDDD/saveParams',
        payload:undefined,
      })
    },30);
  }
  render() {
    return (
      <React.Fragment>
        输出属性：{this.props.B.a}
      </React.Fragment>
    );
  }
}

export default DIR1;
