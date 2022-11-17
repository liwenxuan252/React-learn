import React from 'react'
import './index.css'

export default function Modal(props) {
  const defaultOption = {
    modalWidth:'400px',
    bg:'rgba(0,0,0,.5)',
  }

  const option = Object.assign({},defaultOption,props)
  return (
    <div onClick={(e) => {
        if(e.target.className === 'modal'){
            option.onClose()
        }
    }} className='modal' style={{
        backgroundColor:option.bg
    }}>
      <div className="modal-content" style={{
          width:option.modalWidth
      }}>
          {option.children}
          <button onClick={
              option.onClose
          }>关闭Modal</button>
      </div>
    </div>
  )
}
