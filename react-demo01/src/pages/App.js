import React,{Component} from 'react'
import SayHello from '../commponts/say-hello'
import UserInfo from '../commponts/user-info'
import WebShow from '../commponts/web-show/web-show'
import NameList from '../commponts/name-list'
import Time from '../commponts/time'

const name='herry'
//创建App组件，组件名必须大写
class App extends Component{
    render(){
       return(
           //组件只允许有一个根标签
           /*jsx 表达式*/
           <div className='app'>
           <h1 className='title'>hello,{name}</h1>
           <h1>hello,girl</h1>
           <SayHello name='历史'/>
           <SayHello name='张三'/>
           <UserInfo name='王二' age='18' gender='男'/>
           <WebShow/>
           <NameList>
               <span>王力宏</span>
               <span>JJ</span>   
            </NameList>
            <Time/>
           </div>
       )
    }
    //导出组件
}export default App;