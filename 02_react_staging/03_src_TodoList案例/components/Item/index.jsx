import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {mouse:false} // 标识鼠标移入、移出

  // 鼠标移入、移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag});
    }
  }
  // 勾选或取消勾选一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      // console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked);
    }
  }
  // 删除一个todo的回调
  handleDelete = (id) => {
    // console.log(id);
    if(window.confirm('确定删除吗？')){
      this.props.deleteTodo(id);
    }
  }
  render() {
    const {id,name,done} = this.props;
    const {mouse} = this.state;
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          {/* checked即写死，要改须配合onChange 用defaultChecked可改 但是有bug */}
          {/* defaultChecked只有在第一次起作用 */}
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={() => {this.handleDelete(id)}} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}
