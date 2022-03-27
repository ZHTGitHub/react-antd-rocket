import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ModalUI from './ModalUI'

const defaultOptions = {
  visible: false,
  title: '',
  content: ''
}

let [alert, confirm] = [() => {}, () => {}]

const Modal = (props) => {
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
    options.cancel && options.cancel()
    close()
  }

  // 确认
  const handleConfirm = () => {
    options.confirm && options.confirm()
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
    <ModalUI
      visible={ visible }
      options={ options }
      close={ close }
      handleCancel={ handleCancel }
      handleConfirm={ handleConfirm }
    ></ModalUI>
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

ReactDOM.render(<Modal />, el)