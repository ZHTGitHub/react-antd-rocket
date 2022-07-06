import React, { useState, useImperativeHandle } from 'react'
// import { Modal } from 'antd'

const Dialog = (props, ref) => {
  const [visible, setVisible] = useState(false)

  // 关闭
  const close = () => {
    setVisible(false)
  }

  // 打开
  const open = () => {
    setVisible(true)
  }

  useImperativeHandle(ref, () => ({
    close,
    open
  })) 

  return (
    <div></div>
    // <Modal 
    //   title={ props.title }
    //   visible={ visible }
    //   onCancel={ close }
    // >
    //   { props.children }
    // </Modal>
  )
}

export default React.forwardRef(Dialog)

