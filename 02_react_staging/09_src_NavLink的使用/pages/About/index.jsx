import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('About组件收到的props',this.props);
    return (
      <div>About</div>
    )
  }
}
