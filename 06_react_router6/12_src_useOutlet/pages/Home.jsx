import React from 'react'
import { NavLink, Outlet, useOutlet} from 'react-router-dom'
export default function Home() {
  console.log('$$$',useOutlet())
  return (
    <div>
      <h3>This is About</h3>
      <div>
        <ul className='nav nav-tabs'>
          <li>
            {/* to 可以写/home/news写全，也可以直接写news，但是注意不能 / ， 或者是 【./】 ，等于不写，在当前路由后面加上*/}
            <NavLink className='list-group-item' to="news">News</NavLink>
          </li>
          <li>
            <NavLink className='list-group-item' to="./message">Message</NavLink>
          </li>
        </ul>
        {/* 指定对组件呈现的位置 */}
        <Outlet />
      </div>
    </div>
  )
}
