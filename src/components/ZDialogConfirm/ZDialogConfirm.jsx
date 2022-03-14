import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ZDialogConfirmUI from './ZDialogConfirmUI'

const defaultOptions = {
  visible: false,
  title: '',
  content: ''
}

let open = () => {}

const ZDialogConfirmWrapper = (props) => {
  const [options, setOptions] = useState(defaultOptions)

  // 取消
  const handleCancel = () => {
    options.cancel()
    close()
  }

  // 确认
  const handleConfirm = () => {
    options.confirm()
    close()
  }

  // 关闭
  const close = () => {
    setOptions({
      ...options,
      visible: false
    })
  }

  // 打开
  open = (customOptions) => {
    setOptions({
      ...options,
      ...customOptions,
      visible: true
    })
  }

  return (
    <ZDialogConfirmUI
      options={ options }
      close={ close }
      handleCancel={ handleCancel }
      handleConfirm={ handleConfirm }
    ></ZDialogConfirmUI>
  )
}

let el = document.querySelector('#z-dialog-confirm-wrapper')

if(!el) {
  el = document.createElement('div')
  el.className = 'z-dialog-confirm-wrapper'
  el.id = 'z-dialog-confirm-wrapper'
  document.body.append(el)
}

ReactDOM.render(
  <ZDialogConfirmWrapper />,
  el
)

export default {
  open: (customOptions) => open(customOptions)
}