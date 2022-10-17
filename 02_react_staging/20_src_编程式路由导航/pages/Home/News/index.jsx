import React, { Component } from 'react'

let timer;
export default class News extends Component {
  componentDidMount(){
    timer = setTimeout(() => {
      console.log('Now！');
      this.props.history.push('/home/message');
    },2000 )
  }
  componentWillUnmount(){
    console.log('Destory!');
    clearTimeout(timer);
  }
  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
}
