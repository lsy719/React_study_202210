import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default class MyNavLink extends Component {
  render() {
    return (
      // 会自动将标签体内容作为 children属性带过去
      <NavLink activeClassName="ddd" className="list-group-item" {...this.props} />
    )
  }
}
