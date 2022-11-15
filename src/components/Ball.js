import React, { Component } from 'react'
import './Ball.css'

export default class Ball extends Component {
  constructor(props){
    super(props)
    this.state = {
        left:props.left || 0,
        top:props.top || 0,
        xSpeed:props.xSpeed || 100,
        ySpeed:props.ySpeed || 100,
        bg:props.bg || '#f40'
    }
    const duration = 16;
    setInterval(() => {
        const disX = this.state.xSpeed * duration / 1000;
        const disY = this.state.ySpeed * duration / 1000;
        let newLeft = this.state.left + disX;
        let newTop = this.state.top + disY;
        if(newLeft >= document.documentElement.clientWidth - 100){
            console.log('123',newLeft,document.documentElement.clientWidth - 100)
            newLeft = document.documentElement.clientWidth - 100;
            this.setState({
                xSpeed:-this.state.xSpeed
            })
        }else if(newLeft <= 0){
            newLeft = 0;
            this.setState({
                xSpeed:-this.state.xSpeed
            })
        }
        if(newTop >= document.documentElement.clientHeight - 100){
            newTop = document.documentElement.clientHeight - 100;
            this.setState({
                ySpeed:-this.state.ySpeed
            })
        }else if(newTop <= 0){
            newTop = 0
            this.setState({
                ySpeed:-this.state.ySpeed
            })
        }
        this.setState({
            left:newLeft,
            top:newTop
        })
    }, duration);
  }

  render() {
    return (
      <div className='Ball' style={{
        left:this.state.left,
        top:this.state.top,
        backgroundColor:this.state.bg
      }}>
      </div>
    )
  }
}

