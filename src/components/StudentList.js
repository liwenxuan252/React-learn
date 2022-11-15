import React, { Component } from 'react'
import Student from './Student'

export default class StudentList extends Component {
    
  render() {
    const students = this.props.stus.map(item => <Student key={item.name} {...item} />);
    return (
      <ul>
        {students}
      </ul>
    )
  }
}
