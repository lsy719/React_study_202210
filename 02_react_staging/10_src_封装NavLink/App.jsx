import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import Header from './components/Header'; //Header是一般组件，Home和About是路由组件
import Home from './pages/Home';
import About from './pages/About';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
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
