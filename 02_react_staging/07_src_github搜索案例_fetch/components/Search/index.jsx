import React, { Component } from 'react'
import PubSub from 'pubsub-js';
// import axios from 'axios';

export default class Search extends Component {
  search = async () => {
    // 获取用户的输入
    const {keyWordElement:{value:data}} = this; //解构赋值的连续写法+重命名
    // 发送请求前通知List更新状态
    PubSub.publish('name',{isFirst:false, isLoading:true})

    // 发送网络请求--使用axios
    /* axios.get(`api2/?q=${data}`).then(
      res => {
        PubSub.publish('name',{isFirst:false, isLoading:false, users: res.data.items})
      },
      err => {
        PubSub.publish('name',{isFirst:false, isLoading:false, err: err.message})
      },
    ) */

    // 发送网络请求--使用fetch发送（未优化）
    // fetch(`api2/?q=${data}`).then(
    //   res => {
    //     console.log('联系服务器成功了');
    //     return res.json(); //返回的是一个promise，因为返回的是promise，所以then的状态同此promise
    //     // 断网返回非promise值，包括undefined，走成功
    //   },
    //   err => {
    //     console.log('联系服务器失败了', err); 
    //     return new Promise(); //终端promise链，返回一个初始化状态的promise，永远为pending
    //   }
    // ).then(
    //   res => {
    //     console.log('获取数据成功',res)
    //   },
    //   err => {
    //     console.log('获取数据失败',err)
    //   }
    // )

    // 发送网络请求--使用fetch发送（优化）
    // fetch(`api2/?q=${data}`).then(
    //   res => {
    //     console.log('联系服务器成功了');
    //     return res.json(); //返回的是一个promise，因为返回的是promise，所以then的状态同此promise
    //     // 断网返回非promise值，包括undefined，走成功
    //   }
    // ).then(
    //   res => {
    //     console.log('获取数据成功',res.items);
    //     PubSub.publish('name',{isFirst:false, isLoading:false, users: res.items})
    //   }
    // ).catch(
    //   err => {
    //     console.log('请求出错',err);
    //   }
    // )

    try{
      // await只能等到成功的结果，用try catch处理异常
      const res = await fetch(`api2/?q=${data}`);
      const resData = await res.json();
      PubSub.publish('name',{isFirst:false, isLoading:false, users: resData.items})
    }catch(err){
      console.log('请求出错', err);
      PubSub.publish('name',{isFirst:false, isLoading:false, err:err.message})
    }
    
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
