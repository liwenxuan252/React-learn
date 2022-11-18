import React, { Component } from 'react'
import RadioBoxGroup from '../RadioBoxGroup'
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
    name:'RadioBox'
  }

  onChangeChecked = (val) => {
   this.setState({
     selectData:val
   })
  }

  render() {
    return (
      <div>
        <RadioBoxGroup {...this.state} onChange={this.onChangeChecked} />
      </div>
    )
  }
}
