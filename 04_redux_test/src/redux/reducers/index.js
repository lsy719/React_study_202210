/* 
  该文件用于汇总所有的reducer为一个总的reducer
*/
// 引入combineReducers用于汇总多个reducer
import {combineReducers} from 'redux';

import count from './count';

import persons from './person';

// 汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
  // 此处即为状态名
  count,
  persons,
})

export default allReducer