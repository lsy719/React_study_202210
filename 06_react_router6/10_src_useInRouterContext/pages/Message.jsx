import React,{useState} from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'

export default function Message() {
  const [messages] = useState([
    {id:'001',title:'消息1',content:'从理塘到了上海'},
    {id:'002',title:'消息2',content:'哥们收获好多money'},
    {id:'003',title:'消息3',content:'都什么年代'},
    {id:'004',title:'消息4',content:'还在抽传统香烟'},
  ])
  const navigate = useNavigate(); 
  function showDetail(m){
    return () => {
      navigate('detail',{
        replace:false,// 可以写，默认就是false
        state:{
          id:m.id,
          title:m.title,
          content:m.content,
        }
      })
    }
  }
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
              <button onClick={(showDetail)(m)}>查看详情</button>
              {/* 或者下面这样写，这样函数声明的时候就不用写成高阶形式了 */}
              {/* <button onClick={() => showDetail(m)}>查看详情</button> */}
            </li>
          )
        })}
      </ul>
      {/* 指定路由组件的展示位置 */}
      <Outlet/>
    </div>
  )
}
