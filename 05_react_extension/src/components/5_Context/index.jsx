import React, { Component } from 'react'
import './index.css'

// 创建Context对象
const MyContext = React.createContext();
const {Provider,Consumer} = MyContext
export default class A extends Component {
  state = {
    userName:'tom',
    age:22,
  }
  render() {
    const {userName,age} = this.state;
    return (
      <div className='parent'>
        <h3>A组件</h3>
        <h4>我的用户名是:{userName}</h4>
        {/* <B userName = {this.state.userName}/> */}
        <Provider value={{userName,age}}>
          <B/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  static contextType = MyContext
  render() {
    return (
      <div className='child'>
        <h3>B组件</h3>
        {/* <h4>我从A组件收到的用户名是：{this.props.userName}</h4> */}
        {/* <h4>我从A组件收到的用户名是：{this.context}</h4> */}
        <C />
      </div>
    )
  }
}

/* class C extends Component {
  // 声明接收Context
  static contextType = MyContext
  render() {
    return (
      <div className='grand'>
        <h3>C组件</h3>
        <h4>我从A组件收到的用户名是：{this.context.userName}</h4>
        <h5>年龄：{this.context.age}</h5>
      </div>
    )
  }
} */

function C(){
  return (
    <div className='grand'>
      <h3>C组件</h3>
      <Consumer>
        {
          value => {
            return (
              <>
                <h4>我从A组件收到的用户名是：{value.userName}</h4>
                <h5>年龄：{value.age}</h5>
              </>
            )
          }
        }
      </Consumer>
    </div>
  )
}