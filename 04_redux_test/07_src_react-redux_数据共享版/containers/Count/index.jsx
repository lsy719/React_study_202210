// 引入Count的UI组件
import React, { Component } from 'react'
// 引入Action
import { 
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction 
} from '../../redux/actions/count';

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux';

// 定义UI组件
class Count extends Component {
  state = {carName:'model X'};
  increment = () => {
    const {value} = this.selectNumber;
    this.props.jia(value);
  }
  decrement = () => {
    const {value} = this.selectNumber;
    this.props.jian(value);
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    if(this.props.count %2 !== 0){
      this.props.jia(value);
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber;
    this.props.jiaAsync(value,1000);

  }
  render() {
    // console.log('UI组件接收到的props',this.props);
    return (
      <div>
        <h3>Count组件</h3>
        <h3>当前求和为：{this.props.count}， 下方组件总人数为:{this.props.renshu}</h3>
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
// 映射状态
// const mapStateToProps = state => ({count:state}) 
// 映射操作状态的方法
/* const mapDispatchToProps = dispatch => (
  {
    jia:data => dispatch(createIncrementAction(data)),
    jian:data => dispatch(createDecrementAction(data)),
    jiaAsync:(data,delay) => dispatch(createIncrementAsyncAction(data,delay)),
  }
) */
// 使用connect()()创建并暴露一个Count的容器组件 
export default connect(
  state => ({count:state.he, renshu:state.rens.length}), 
  // mapDispatchToProps的一般写法
  /* dispatch => ({
    jia:data => dispatch(createIncrementAction(data)),
    jian:data => dispatch(createDecrementAction(data)),
    jiaAsync:(data,delay) => dispatch(createIncrementAsyncAction(data,delay)),
  }) */
  // mapDispatchToProps的简写
  {
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction,
  }
)(Count);

