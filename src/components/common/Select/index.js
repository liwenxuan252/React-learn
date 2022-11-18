import React, { Component } from 'react'

export default class Select extends Component {

  // 得到一组Select选择框
  getSelectBoxGroup = () => {
    return this.props.datas.map((it, index) => {
      return <option
        key={index}
        value={it.value}
        >
        {it.text}
      </option>
    })
  }

  onSelectChange = (e) => {
    // console.log(e.target.value,'ss')
    const val = e.target.value;
    this.props.onChange && this.props.onChange(val,this.props.name,e)
  }

  render() {
    return (
      <div>
        <select name={this.props.name}  onChange={this.onSelectChange}>
          {this.getSelectBoxGroup()}
        </select>
      </div>
    )
  }
}
