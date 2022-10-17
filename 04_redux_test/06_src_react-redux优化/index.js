import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App'
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// 监测redux中状态的改变，若redux中状态发生了改变，那么重新渲染App组件
/* store.subscribe(()=>{
  root.render(
    <App />
  );
})
 */