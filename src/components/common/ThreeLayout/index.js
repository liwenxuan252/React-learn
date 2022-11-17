import React from 'react'
import './index.css'

export default function ThreeLayout(props) {
    const defaultOption = {
        leftWidth:200,
        rightWidth:200,
        minWidth:800,
        gap:0
    }

    const option = Object.assign({},defaultOption,props)


  return (
    <div className='ThreeLayout'>
      <div className="main" style={{
          minWidth:option.minWidth
      }}>
          {option.children}
      </div>
      <div className="aside-left" style={{
          width:option.leftWidth,
          marginRight:option.gap
      }}>
          {option.left}
      </div>
      <div className="aside-right" style={{
          width:option.rightWidth,
          marginLeft:option.gap
      }}>{option.right}</div>
    </div>
  )
}
