import React, { Component } from 'react'
import Student from './Student'

export default class Studentlist extends Component {
  render() {
    const result = this.props.stus.map(item => <Student key={item.id} {...item} />)
    return (
      <div >
        {result}
      </div>
    )
  }
}
