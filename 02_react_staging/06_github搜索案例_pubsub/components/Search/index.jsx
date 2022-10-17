import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import axios from 'axios';

export default class Search extends Component {
  search = () => {
    // 获取用户的输入
    const {keyWordElement:{value:data}} = this; //解构赋值的连续写法+重命名
    // console.log(data);
    // 发送请求前通知List更新状态
    // this.props.updateAppState({isFirst:false, isLoading:true})
    PubSub.publish('name',{isFirst:false, isLoading:true})

    // 发送网络请求
    axios.get(`api1/?q=${data}`).then(
      res => {
        // 请求成功后通知List更新状态
        // this.props.updateAppState({isFirst:false, isLoading:false, users: res.data.items})
        PubSub.publish('name',{isFirst:false, isLoading:false, users: res.data.items})
      },
      err => {
        // 请求失败后通知List更新状态
        // this.props.updateAppState({isFirst:false, isLoading:false, err: err.message})
        // err是一个对象，对象不能直接作为react child 渲染，要些具体值
        PubSub.publish('name',{isFirst:false, isLoading:false, err: err.message})
      },
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 Github 用户</h3>
        <div>
          <input ref = {c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
