import React, { Component } from 'react'

export default class RadioBoxGroup extends Component {

  // 得到一组单选框
  getRadioBoxGroup = () => {
    return this.props.datas.map((it, index) => {
      return <label key={index}>
        <input 
          type="radio" 
          name={this.props.name} 
          value={it.value}
          onChange={this.onSelectChange} 
          checked={this.props.selectData === it.value}
        />
        {it.text}
      </label>
    })
  }

  onSelectChange = (e) => {
    const val = e.target.value;
    this.props.onChange && this.props.onChange(val,this.props.name,e)
  }

  render() {
    return (
      <div>
        {this.getRadioBoxGroup()}
      </div>
    )
  }
}
