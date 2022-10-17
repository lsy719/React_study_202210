import React, { Component } from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import root from '../..'

// eslint-disable-next-line
class index extends Component {
  state = {count:0}
  myRef = React.createRef();
  add = () => {
    this.setState((state,props) => {
      console.log(state,props);
      return {count:state.count + 1}
    })
  }

  unmount = () => {
    // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    root.unmount();
  }

  show = () => {
    alert(this.myRef.current.value);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState( state => ({count:state.count + 1}))
    },1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>+1</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.show}>提示信息</button>
        <input type="text" ref={this.myRef} />
      </div>
    )
  }
}

export default function Demo(){
  const [count,setCount] = React.useState(0);
  const [name,setName] = React.useState(true);
  const myRef = React.useRef();
  
  // 第二个参数不写，谁都检测，写空数组，谁也不检测，相当于didMount(只执行一次)，在数组里写上要监测的状态。
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    },1000)
    
    /* 
      关于return的触发条件：
      当第二个参数不写时，更新一次调用一次；如上，由于是定时器，所以一直更新，一直调用
      当第二个参数为空数组时，只在组件销毁时调用
      当第二个参数指定了监测的状态后，则根据状态来调用
    */
    return () => {
      clearInterval(timer);
      console.log('组件销毁');
    }
  },[])

  function add(){
    // setCount(count+1) //第一种写法
    setCount(count => count + 1)
  }

  function change(){
    setName( name => !name)
  }
  function unmount(){
    root.unmount()
  }
  function show(){
    alert(myRef.current.value);
  }
  return (
    <div>
      <h2>当前求和为{count}</h2>
      <div>
        {name ? <h2 style = {{color:'red'}}>amd yes</h2> : <h2 style = {{color:'green'}}>nvidia fku</h2>}
      </div>
      
      <button onClick={add}>+1</button>
      <button onClick={change}>change</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>提示信息</button>
        <input type="text" ref={myRef} />
    </div>
  )
} 
