import React, { Component } from 'react'
import qs from 'qs';

const data =[
  {id:'01',content:'从理塘到了上海，哥们收获好多money'},
  {id:'02',content:'都什么年代，还在抽传统香烟'},
  {id:'03',content:'我卖的烟弹，包含了理塘王子的魅力'},
];

export default class Detail extends Component {
  render() {
    // 接收params参数
    // const {id,title} = this.props.match.params;

    // 接收search参数
    const {search} = this.props.location;
    const {id,title} = qs.parse(search.slice(1,))

    const {content} = data.find((detailObj) => {
      return detailObj.id === id;
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{content}</li>
      </ul>
    )
  }
}
