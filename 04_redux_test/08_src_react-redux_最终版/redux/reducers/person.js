import { ADD_PERSON } from "../constant";

// 初始化人的列表
const initState = [{id:'001',name:'tom',age:18}];

// 要求personReducer是一个纯函数
export default function personReducer(perState=initState, action){
  const {type, data} = action
  switch (type) {
    case ADD_PERSON: //若是添加一个人
      // 为什么不用unshift或者push？
      /* 
        react底层有做判断，返回的preState和之前一样【浅比较（地址）】，就不作改变，想想数组添加一个元素，但数组本身没变，类型深浅拷贝的概念（浅拷贝只拷贝地址），需要形成一个新的数组，采用...方式
      */
      return [data,...perState];
    default:
      return perState;
  }
}