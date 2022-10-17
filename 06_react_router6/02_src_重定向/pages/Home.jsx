import React,{useState} from 'react'
import {Navigate} from 'react-router-dom';
export default function Home() {
  const [sum,setSum] = useState(1);
  return (
    <div>
      <h3>This is About</h3>
      {/* Navigate只要渲染，就会引起视图的切换 */}
      {sum === 2 ? <Navigate to='/about' replace/> : <h4>当前sum的值是：{sum}</h4>}
      <button onClick={() => setSum(2)}>2</button>
    </div>
  )
}
