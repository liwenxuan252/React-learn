import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div>
        【 姓名 】{this.props.name},
        【 电话 】{this.props.phone},
        【 性别 】{this.props.sex === 1 ? '男' : '女'},
        【 邮箱 】{this.props.email},
      </div>
    )
  }
}
