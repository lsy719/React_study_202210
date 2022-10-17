import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';//可以在index.html里引入
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log(ReactDOM)

// ReactDOM.render(<App/>, document.getElementById('root'));

// 通过reportWebVitals.js做页面性能监测（其中靠的是一个库）
reportWebVitals();
