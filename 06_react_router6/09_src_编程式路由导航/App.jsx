import React from 'react'
import {NavLink,useRoutes} from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';

export default function App() {
  // 根据路由表生成对应的路由规则
  const element = useRoutes(routes);

  function computedClassName({isActive}) {
    return isActive ? 'list-group-item lsy-active' : 'list-group-item';
  }
  return (
    <div>
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 路由链接 */}
              <NavLink className={computedClassName} to='/about'>About</NavLink>
              {/* end表示此路由子级路由匹配后本身失去高亮 */}
              <NavLink className={computedClassName} end to='/home'>Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* {<Routes>
                  <Route path = "/about" element={<About/>}/>
                  <Route path = "/home" element={<Home/>}/>
                  <Route path = '/' element={<Navigate to="/home"/>}/>
                </Routes>} */}
                {element}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

