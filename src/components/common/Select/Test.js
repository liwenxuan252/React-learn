import React, { Component } from 'react'
import SelectBoxGroup from './index'

export default class Test extends Component {
  state = {
    datas:[
      {
        text: '足球',
        value: 'footBall'
      },
      {
        text: '篮球',
        value: 'basketBall'
      },
      {
        text: '游泳',
        value: 'swimming'
      },
      {
        text: '跑步',
        value: 'running'
      }
    ],
    selectData:'', // 选中的框
    name:'Select'
  }

  onChangeChecked = (val) => {
   this.setState({
     selectData:val
   })
  }

  render() {
    return (
      <div>
        <SelectBoxGroup {...this.state} onChange={this.onChangeChecked} />
      </div>
    )
  }
}
