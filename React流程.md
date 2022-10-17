# React流程

## 1.搭建项目

### 1.cmd

```
create-react-app 包名
```

### 2.创建public文件夹；

### 3.public下引入favicon.ico页签图标；

### 4.创建index.html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react脚手架</title>
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico">
    <!-- <link rel="stylesheet" href="./css/bootstrap.css"> -->
    <!-- 在此路径不要用./ 相对路径，public即为根目录，写绝对路径即可， ./ 相对路径会在组件使用多级路由时引入资源出错 -->
    <!-- 或者使用hash模式 -->
    <!-- <link rel="stylesheet" href="/css/bootstrap.css"> -->
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

### 5.创建src文件夹；

### 6.创建App.jsx：

```jsx
import React from 'react'

export default function App() {
  return (
    <div>
        App...
    </div>
  )
}
```

### 7.创建index.js入口文件：

```js
import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default root;
```

### 项目结构：

```
react_app
	node_modules
	public
		favicon.ico
		index.html
	src
		App.jsx
		index.js
```



## 2.开始项目

### 1.配置代理

​	src下创建setupProxy.js

```js
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
	app.use(
		// proxy('/api1',{ 
		createProxyMiddleware('/api1',{ //遇见/api1前缀的请求，就会触发该代理配置
			target:'http://localhost:5000', //请求转发给谁
			changeOrigin:true,//控制服务器收到的请求头中Host字段（谁发出的）的值
			pathRewrite:{'^/api1':''} //重写请求路径(必须)
		}),
		// proxy('/api2',{ 
		createProxyMiddleware('/api2',{
			target:'http://localhost:5001',
			changeOrigin:true,
			pathRewrite:{'^/api2':''}
		}),
	)
}
```

### 2.引入路由

​	1.创建路由表<br>	src下创建routes文件夹，创建index.js，并在App.jsx中引入此路由表，设置路由组件展示位置

```js
// index.js
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import { Navigate } from "react-router-dom"

const routes = [
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/home',
    element:<Home/>,
    children:[
      {
        path:'news',
        element:<News/>,
      },
    ]
  },
  {
    path:'/',
    element:<Navigate to = "/about"/>
  }
]
export default routes;
      
// App.jsx
...
import {NavLink,useRoutes} from 'react-router-dom';
import routes from './routes';
...
const element = useRoutes(routes);
...
return (
	<div>
    	...
    	{element}
    	...
    </div>
)
```

### 3.引入redux

1.入口文件index.js引入Provider

```js
import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App'
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* 此处需要用provider包裹App，目的是让App所有的后代容器组件都能接收到store */
  <Provider store={store}>
    <App />
  </Provider>
);

```

2.创建redux文件夹，创建actions、reducers子文件夹

创建constant.js指定action类型；

reducers下创建各组件对应reducer；

actions下创建action；

redux文件夹下创建store.js

```js
// 引入createStore，专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware} from 'redux';
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';
import reducer from './reducers';
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
```

### 4.引入antd

App.jsx:

```html
import React, { Component } from 'react';
import { Button } from 'antd';

export default class App extends Component {
  render() {
    return (
      <div >
        <Button type="primary">Button</Button>
      </div>
    )
  }
}
```



