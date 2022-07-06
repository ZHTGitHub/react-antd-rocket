import React from 'react'
import { ZModal, _ } from 'packages'
// import { ZModal, _ } from 'react-antd-rocket'

const Modal = () => {

  // alert(_.getType('A'))

  const openModal = () => {
    ZModal.confirm({
      title: '标题',
      content: '代码是写给人看的',
      slot: <input></input>,  
      html: '<h1>123</h1>',
      width: 320
    })
  }

  return (
    <div className='modal'>
      <button 
        onClick={ openModal }
      >OPEN MODAL</button>
    </div>
  )
}

export default Modal