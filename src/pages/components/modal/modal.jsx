import React from 'react'
import { Button } from 'antd'
import { ZModal } from 'packages'

const Modal = () => {

  const openModal = () => {
    ZModal.confirm({
      title: '标题',
      content: '代码是写给人看的'
    })
  }

  return (
    <div className='modal'>
      <Button onClick={ openModal }>OPEN</Button>
    </div>
  )
}

export default Modal