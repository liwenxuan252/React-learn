import React, { Component } from 'react'

export default class CheckBoxGroup extends Component {

  // 得到一组多选框
  getCheckBoxGroup = () => {
    return this.props.datas.map((it, index) => {
      return <label key={index}>
        <input 
          type="checkbox" 
          name={this.props.name} 
          value={it.value}
          onChange={this.onSelectChange} 
          checked={this.props.selectDatas.includes(it.value)}
        />
        {it.text}
      </label>
    })
  }

  onSelectChange = (e) => {
    // console.log(e.target.value,'ss')
    const val = e.target.value;
    let newArr = []
    // 选中
    if(e.target.checked){
      newArr = [...this.props.selectDatas,val]
    }
    else{
      newArr = this.props.selectDatas.filter(item => item !== val)
    }
    this.props.onChange && this.props.onChange(newArr,this.props.name,e)
  }

  render() {
    return (
      <div>
        {this.getCheckBoxGroup()}
      </div>
    )
  }
}
