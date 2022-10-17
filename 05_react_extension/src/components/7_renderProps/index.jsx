import React, { Component } from 'react'
import './index.css';
// eslint-disable-next-line
import C from '../1_setState'

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h3>Parent组件</h3>
        {/* <A>
          <B x = '芝士雪豹'/>
        </A> */}
        {/* 向组件内部动态传入带内容的结构？Vue插槽 */}
        <A render={
          (name)=>{
            return (
              <B name={name} />
            )
          }
        }/>
      </div>
    )
  }
}

class A extends Component {
  state = {name:'tom'}
  render() {
    const {name} = this.state;
    return (
      <div className='a'>
        <h3>A组件</h3>
        {this.props.render(name)}
      </div>
    )
  }
}

// eslint-disable-next-line
class B extends Component {
  render() {
    return (
      <div className='b'>
        <h3>B组件</h3>
        <span>{this.props.name}</span>
      </div>
    )
  }
}