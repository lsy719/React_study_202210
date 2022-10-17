import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    const {todos} = this.props;
    // 已完成的个数
    const doneCount = todos.reduce((pre,curent) => {
      return curent.done ? pre + 1 : pre;
    },0);
    // 总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          {/* defaultChecked只有在第一次起作用 */}
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange = {this.handleChangeAll}/>
        </label>
        <span>
          <span>已完成:{doneCount}</span> / 全部:{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
  // 全选checkbox的回调
  handleChangeAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  }
  // 清除所有已完成的回调
  handleClearAllDone = () => {
    this.props.clearAllDone();
  }
}
