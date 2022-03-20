import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ZDialogUI from './ZDialogUI'

const defaultOptions = {
  visible: false,
  title: '',
  content: ''
}

let [alert, confirm] = [() => {}, () => {}]

const ZDialog = (props) => {
  const [visible, setVisible] = useState(false)
  const [options, setOptions] = useState(defaultOptions)

  // 提示弹窗
  alert = (options) => {
    setOptions({
      ...defaultOptions,
      ...options,
      isAlert: true
    })
    open()
  }

  // 确认弹窗
  confirm = (options) => {
    setOptions({
      ...defaultOptions,
      ...options,
      isAlert: false
    })
    open()
  }

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
    setVisible(false)
  }

  // 打开
  const open = () => {
    setVisible(true)
  }

  return (
    <ZDialogUI
      visible={ visible }
      options={ options }
      close={ close }
      handleCancel={ handleCancel }
      handleConfirm={ handleConfirm }
    ></ZDialogUI>
  )
}

export default {
  alert: (customOptions) => alert(customOptions),
  confirm: (customOptions) => confirm(customOptions)
}

let el = document.querySelector('#z-dialog')

if(!el) {
  el = document.createElement('div')
  el.className = 'z-dialog'
  el.id = 'z-dialog'
  document.body.append(el)
}

ReactDOM.render(<ZDialog />, el)