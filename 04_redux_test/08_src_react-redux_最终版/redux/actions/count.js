/* 
  该文件专门为Count组件生成action对象
*/

import {INCREMENT, DECREMENT} from '../constant';

// 所谓的异步Action就是指action的值为Object类型的一般对象
export const increment = data => ({type: INCREMENT, data});

export const decrement = data => ({type: DECREMENT, data});

// 所谓的异步Action就是指action的值为函数，异步action中一般都会调用同步action，异步action不是必须要用的
export const incrementAsync = (data, delay) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    },delay);
  }
} 

