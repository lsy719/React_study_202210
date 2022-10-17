import React, { Component } from 'react'
import {nanoid} from 'nanoid';
import {connect} from 'react-redux';
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id:nanoid(),name,age};
    this.props.jiaYiRen(personObj);
    this.nameNode.value = '';
    this.ageNode.value = '';
  }

  render() {
    return (
      <div>
        <h3>Person组件</h3>
        <h3>上方组件求和为：{this.props.qiuhe}</h3>
        <input ref={c=>this.nameNode = c} type="text" placeholder='输入名字'/>&nbsp;&nbsp;
        <input ref={c=>this.ageNode = c} type="text" placeholder='输入年龄'/>&nbsp;&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.yiduiren.map((p) => {
              return <li key={p.id}>{p.name}---{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({yiduiren:state.rens, qiuhe:state.he}),
  {jiaYiRen:createAddPersonAction},
)(Person)
