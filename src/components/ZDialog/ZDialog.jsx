import React, { useState, useImperativeHandle } from 'react'
import { Modal } from 'antd'

const ZDialog = (props, ref) => {
  const [dialog, setDialog] = useState(false)

  const close = () => {
    setDialog(false)
  }

  const open = () => {
    setDialog(true)
  }

  useImperativeHandle(ref, () => ({
    close,
    open
  })) 

  return (
    <Modal 
      title={ props.title }
      visible={ dialog }
      onCancel={ close }
    >
      { props.children }
    </Modal>
  )
}

export default React.forwardRef(ZDialog)

