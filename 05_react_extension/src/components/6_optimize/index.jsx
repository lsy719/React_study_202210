// eslint-disable-next-line
import React, { Component,PureComponent } from 'react'
import './index.css';

export default class Parent extends PureComponent {
  state = {carName:'GIANT ATX777',stus:['AAA','BBB','CCC']}
  changeCar = () => {
    // this.setState({carName:!this.state.carName})
    // const obj = {...this.state};
    const obj = this.state;
    obj.carName = 'Model X';
    console.log(obj === this.state);
    this.setState(obj); // 无法改变
  }

  add = () => {
    const {stus} = this.state;
    this.setState({stus:[...stus, 'DDD']});
  }
  /* shouldComponentUpdate(nextProps, nextState){
    console.log(this.props, this.state);// 目前的props和state
    console.log(nextProps, nextState);// 接下来要变化的目标props，目标state
    if(this.state.carName === nextState.carName) return false
    else return true
  } */
  render() {
    const {carName,stus} = this.state;
    return (
      <div className='parent'>
        <h3>Parent组件</h3>
        <button onClick={this.changeCar}>change</button>
        <span>车名：{carName}</span><br /><br />
        <span>{stus.join('-')}</span>
        <button onClick={this.add}>添加</button>
        <Child carName = {carName}/>
      </div>
    )
  }
}

class Child extends PureComponent {
  /* shouldComponentUpdate(nextProps,nextState){
    console.log(this.props, this.state);// 目前的props和state
    console.log(nextProps, nextState);// 接下来要变化的目标props，目标state
    if(this.props.carName == nextProps.carName) return false;
    else return true;
  } */
  render() {
    console.log('child--render')
    const {carName} = this.props
    return (
      <div className='child'>
        <h3>Child组件</h3>
        <span>车名：{carName}</span><br />
      </div>
    )
  }
}
