import React, {Component} from 'react';
import TabBar from '../components/tabbar'
import NavigtaionBar from '../components/navigationbar'
import '../styles/mine.css'
import {Icon} from 'antd'

class Mine extends Component {
  handleCanlelationClick(){
    this.props.history.push('/');
  }
  render () {
    const infos = [
      [
        {title: '钱包', type: 'wallet'},
        {title: '发现', type: 'search'},
        {title: '分享', type: 'share-alt'},
        {title: '指南', type: 'compass'},
        {title: '礼物', type: 'gift'},
      ],
      [
        {title: '设置', type: 'setting'},
        {title: '收藏', type: 'star-o'}
      ],
    ]

    const styleObj = {
      background:`url(${require('../asserts/bg.jpg')}) no-repeat`
    }
    const subObj = {
      background:`url(${require('../asserts//bg.jpg')}) no-repeat center center`
    }
    return (
      <div id='app' className='mine'>
        <NavigtaionBar title='我的' />
        <main className='content'>
        <div className='mine-box' style={styleObj}>
          <div className='head-protrait' style={subObj}></div>
          <p className='signature'>你是个傻子</p>
        </div>
        {/* 工具 */}
        <div className='tool-list'>
           {
             infos.map((groupList,index) => {
               return(
                 <ul key={index} className='tool-list'>
                 {
                   groupList.map((obj) => {
                    return(
                      <li key={obj.title}>
                      <div className='box'>
                        <Icon className='icon' type={obj.type}></Icon>
                        <span className='text'>{obj.title}</span>
                      </div>
                     
                      <Icon type='right'/>
                      </li>
                    )
                   })
                 }
                 </ul>
               )
             })
           }
        </div>
        <div className="logout" onClick={this.handleCanlelationClick.bind(this)}>注销登陆</div>
        </main>
        <TabBar />
      </div>)
  }
}

export default Mine;
