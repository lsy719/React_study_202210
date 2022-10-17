import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    // users:[
    //   {id:'001',name:'AAA',age:18},
    //   {id:'002',name:'BBB',age:22},
    //   {id:'003',name:'CCC',age:25}
    // ],
    user:'xxx',
  }

  render() {
    return (
      <div>
        <h2>child组件</h2>
        {this.state.users.map((userObj) => {
          return <h4 key={userObj.id}>{userObj.name}-----{userObj.age}</h4>
        })}
      </div>
    )
  }
}
