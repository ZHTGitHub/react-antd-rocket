import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { DialogConfirmWrapper } from './style'

const defaultOptions = {
  visible: false,
  title: '',
  content: ''
}

let confirm;

const ZDialogConfirmWrapper = (props) => {
  const [options, setOptions] = useState(defaultOptions)

  confirm = (customOptions) => {
    setOptions(() => ({
      ...options,
      cancel: close,
      ...customOptions
    }))
  }

  const handleCancel = () => {
    options.cancel()
    close()
  }

  const handleConfirm = () => {
    options.confirm()
    close()
  }

  const close = () => {
    setOptions({
      ...options,
      visible: false
    })
  }

  return (
    <React.Fragment>
      {
        options.visible 
        ?
        <DialogConfirmWrapper>
          <div className='overlay' onClick={ close }></div>

          <div className='dialog'>
            <div className='title'>
              { options.title }
            </div>

            <div className='content'>
              <div className='message'>
                { options.content }
              </div>

             {
                options.slot
                ? 
                <div 
                  className='slot' 
                  dangerouslySetInnerHTML={{ __html:options.slot }}
                >
                </div>
                :
                null
             }
            </div>

            <div className='actions'>
              <div className='left' onClick={ handleCancel }>取消</div>
              <div className='right' onClick={ handleConfirm }>确认</div>
            </div>
          </div>
        </DialogConfirmWrapper>
        :
        null
      }
    </React.Fragment>
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
  confirm: (customOptions) => confirm(customOptions)
}