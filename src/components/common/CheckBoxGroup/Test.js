import React, { Component } from 'react'
import CheckBoxGroup from './index'

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
    selectDatas:['footBall'], // 选中的框
    name:'CheckBox'
  }

  onChangeChecked = (newArr) => {
   this.setState({
     selectDatas:newArr
   })
  }

  render() {
    return (
      <div>
        <CheckBoxGroup {...this.state} onChange={this.onChangeChecked} />
      </div>
    )
  }
}
