import React, { Component } from 'react'

export default class Demo extends Component {
  state = {count:0}
  add = () => {
    this.setState({count:this.state.count+1},() => {
      console.log('回调',this.state.count);//此回调状态改变后才调用
    })
    // setState本身是同步方法，但是其引起的react状态改变是异步的
    console.log('@',this.state.count);
  }
  addFun = () => {
    // 函数式能拿到state和props
    this.setState((state, props) => {
      console.log(state,props);
      return {count:state.count+1}
    })
  }
  render() {
    return (
      <div>
        <h3>当前求和为:{this.state.count}</h3>
        <button onClick={this.add}>+1</button>&nbsp;
        <button onClick={this.addFun}>+1(函数式)</button>
      </div>
    )
  }
}
