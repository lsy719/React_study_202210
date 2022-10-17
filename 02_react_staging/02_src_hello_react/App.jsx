// 创建“外壳”组件App
import React,{Component} from 'react';//这不属于结构赋值，只是一种引入方式

// 引入组件
import Hello from './components/Hello';
import Welcome from './components/Welcome';

// 创建并暴露
export default class App extends Component{
    render(){
        return (
            <div>
                <Welcome />
                <Hello/>
            </div>
        )
    }
}
