import React,{Component} from 'react'


const Sunzi = (props) => {
    return(
        <span>{props.msg}</span>
    )
}
const Label = (props) => {
    return(
       <div>
        <span>孙子</span>
        <Sunzi msg={props.msg}/>
       </div>
    )
}
//函数语法
//function(){}
class Time extends Component{
    //constructor->组件构造器
    //面向对象编辑
    //父类：子类
    constructor(props){
        super(props);
         //定义状态属性
         this.state = {
             date: new Date(),
             msg:'有点意识'
         }
    }
    //组件挂载完成
    componentDidMount(){
        //定义定时器
        //this -> react 组件
        this.timer = setInterval(()=>{
            //每秒更新一次date状态
           this.setState({
            date:new Date()
           })
        },1000)
    }
    componentWillUnmount(){
        //清除定时器
        clearInterval(this.timer);
    }
    render(){
        return(
            <h1>
            北京时间：{this.state.date.toLocaleTimeString()}
            <Label msg={this.state.msg}/>
            </h1>
        )
    }

}
export default Time;