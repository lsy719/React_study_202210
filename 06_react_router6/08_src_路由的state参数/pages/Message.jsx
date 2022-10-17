import React,{useState} from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Message() {
  const [messages] = useState([
    {id:'001',title:'消息1',content:'从理塘到了上海'},
    {id:'002',title:'消息2',content:'哥们收获好多money'},
    {id:'003',title:'消息3',content:'都什么年代'},
    {id:'004',title:'消息4',content:'还在抽传统香烟'},
  ])
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            // 路由链接
            <li key={m.id}>
              <Link 
                to={'detail'} 
                state={
                  {
                    id:m.id,
                    title:m.title,
                    content:m.content
                  }
                }
              >{m.title}</Link>&nbsp;&nbsp;
            </li>
          )
        })}
      </ul>
      {/* 指定路由组件的展示位置 */}
      <Outlet/>
    </div>
  )
}
