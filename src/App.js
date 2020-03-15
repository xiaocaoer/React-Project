import React from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css'

 export default class App extends React.Component{
  render(){
    return(
      <div>
        <h2>我是APP组件</h2>
        <Button type="primary">第一个antd组件</Button>
      </div>
      
    )
  }
}