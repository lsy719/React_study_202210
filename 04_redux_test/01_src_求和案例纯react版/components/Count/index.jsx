import React, { Component } from 'react'

let timer;
export default class Count extends Component {

  state = {count:0};

  increment = () => {
    const {value} = this.selectNumber;
    const {count} = this.state;
    this.setState({count: count + value*1})
  }
  decrement = () => {
    const {value} = this.selectNumber;
    const {count} = this.state;
    this.setState({count: count - value*1})
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    const {count} = this.state;
    if((count + value*1)%2 !== 0){
      this.setState({count: count + value*1})
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber;
    const {count} = this.state;
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      this.setState({count: count + value*1})
    }, 500);
  }
  render() {
    const {count} = this.state;
    return (
      <div>
        <h3>当前求和为： {count}</h3>
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
