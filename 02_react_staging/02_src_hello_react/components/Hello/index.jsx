import React,{Component} from "react";
// import './index.css'
import hello from './index.module.css';
/* 
    样式的模块化
    1.css后缀前加module
    2.通过变量引入，当作对象调用
*/

export default class Hello extends Component {
    render(){
        return (
            <h2 className={hello.title}>Hello,React</h2>
        )
    }
}
