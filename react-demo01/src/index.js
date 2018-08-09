import React from 'react'
import ReactDom from 'react-dom'
import App from './pages/App'
// import Time from './commponts/time'

// ReactDom.render:生成虚拟DOM，渲染页面
// const element = <h1>hello,react</h1>
ReactDom.render(
    // element,
    // <Time/>,
    <App/>,
    document.getElementById('root')
);