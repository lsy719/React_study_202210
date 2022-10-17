import React, { Component } from 'react'
import Child from './child'

export default class Parent extends Component {

  state = {
    hasError:'', //用于标识子组件是否产生错误
  }

  // 当parent的子组件出现报错时候，会触发getDerivedStateFromError调用，并携带错误信息
  static getDerivedStateFromError(err){
    console.log(err);
    return {hasError:err};
  }

  // 
  componentDidCatch(){
    console.log('统计错误，反馈给服务器，用于通知编码人员进行bug解决');
  }


  render() {
    return (
      <div>
        <h2>Parent组件</h2>
        {this.state.hasError ? <h2>出错了,爬...</h2> : <Child/>}
      </div>
    )
  }
}
