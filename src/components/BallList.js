import React, { Component } from 'react'
import Ball from './Ball';
import { getRandom } from '../utils';

export default class BallList extends Component {
  constructor(props){
      super(props);
      this.state = {
          baseInfo:[]
      }
      let timer = setInterval(() => {
        const baseInfo = {
            left:getRandom(0,200),
            top:getRandom(0,200),
            xSpeed:getRandom(100,300),
            ySpeed:getRandom(100,300),
            bg:`rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
        }  
        this.setState({
            baseInfo:[...this.state.baseInfo,baseInfo]
        })
        if(this.state.baseInfo.length >= 10){
            clearInterval(timer)
        }
      }, 1000);
  }

  render() {
    let result = this.state.baseInfo.map((item,index) => <Ball key={index} {...item} />)
    return (
      <div>
        {result}
      </div>
    )
  }
}
