import React from 'react'
import { useSearchParams,useLocation } from 'react-router-dom';

export default function () {
  const [search, setSearch] = useSearchParams();
  // 第二个参数充当计算属性作用？
  // console.log(search.get('id'));
  function searchGet(key){
    return search.get(key)
  }
  // 或者
  // const id = search.get('id');
  // const title = search.get('title');
  // const content = search.get('content');

  const x = useLocation();
  console.log(x);

  return (
    <ul>
      <li>
        <button onClick={() => setSearch('id=008&title=哈哈&content=你女子')}>点我更新一下收到的search参数</button>
      </li>
      <li>{searchGet('id')}</li>
      <li>{searchGet('title')}</li>
      <li>{searchGet('content')}</li>
    </ul>
  )
}
