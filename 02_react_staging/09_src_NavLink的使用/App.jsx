import React, { Component } from 'react'
import {Route,NavLink} from 'react-router-dom';
import Header from './components/Header'; //Header是一般组件，Home和About是路由组件
import Home from './pages/Home';
import About from './pages/About';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生Html中， 靠<a>跳转不同的界面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在react中靠路由链接实现切换组件--编写路由链接 */}
              <NavLink activeClassName="ddd" className="list-group-item eee" to = "/about">About</NavLink>
              <NavLink activeClassName="ddd" className="list-group-item eee" to = "/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path = "/about" component={About}/>
                <Route path = "/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
