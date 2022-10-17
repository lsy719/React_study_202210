const React = {a:1, b:2};

export class Component {

}

React.Component =  Component;

export default React; //没有暴露Component，不能{Component}引入，除非暴露Component