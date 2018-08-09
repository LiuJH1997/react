import React,{component} from 'react'

const WebName = () => {
    return (
        <span {...this.props}>我的博客</span>
        
    )
}
const WebLink = (props) => {
    return(
        <a {...props}>
        http://www.baidu.com
        </a>
    )

}
const WebShow = () => {
    return(
        <div className='web-show'>
            <p>
                <WebName/>:
                <WebLink href='http://www.baidu.com'/>
            </p>
        </div>
    )
}
export default WebShow