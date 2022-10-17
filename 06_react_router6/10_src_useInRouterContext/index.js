import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter } from "react-router-dom";
import Demo from "./components/Demo";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* 此时Demo中的useInRouterContext就返回false */}
    <Demo/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
  
);
export default root;