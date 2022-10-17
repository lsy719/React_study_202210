import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    // console.log(this.props.match.params);
    // 接收params参数
    const {id,title} = this.props.match.params;
    const data =[
      {id:'01',content:'从理塘到了上海，哥们收获好多money'},
      {id:'02',content:'都什么年代，还在抽传统香烟'},
      {id:'03',content:'我卖的烟弹，包含了理塘王子的魅力'},
    ];
    const findResult = data.find((detailObj) => {
      return detailObj.id === id;
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
