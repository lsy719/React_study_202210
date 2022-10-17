import React, { Component } from 'react'
import store from '../../redux/store';
// 引入store，用于获取redux中保存的状态

let timer;
export default class Count extends Component {

  state = {carName:'model X'};

  // 写到入口文件index.js里，一劳永逸
  /* componentDidMount(){
    // 检测redux中状态的变化
    store.subscribe(() => {
      // this.render();//自己调render没用
      this.setState({});//只要调setState，react就会调render
    })
  } */

  increment = () => {
    const {value} = this.selectNumber;
    // 通知redux加value
    store.dispatch({type:'increment',data:value});
  }
  decrement = () => {
    const {value} = this.selectNumber;
    store.dispatch({type:'decrement',data:value});
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    const count = store.getState();
    if((count + value*1)%2 !== 0){
      store.dispatch({type:'increment',data:value});
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber;
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      store.dispatch({type:'increment',data:value});
    }, 500);
  }
  render() {
    return (
      <div>
        <h3>当前求和为：{store.getState()}</h3>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
