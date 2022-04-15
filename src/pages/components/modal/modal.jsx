import React from 'react'
import { Button, Input } from 'antd'
import { ZModal } from 'packages/components'

const Modal = () => {

  const openModal = () => {
    ZModal.confirm({
      title: '标题',
      content: '代码是写给人看的',
      slot: <Input></Input>,
      // html: '<h1>123</h1>',
      width: 320
    })
  }

  return (
    <div className='modal'>
      <Button 
        onClick={ openModal }
      >OPEN MODAL</Button>
    </div>
  )
}

export default Modal