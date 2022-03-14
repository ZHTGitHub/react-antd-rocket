import React from 'react'
import { DialogConfirmWrapper } from './style'

const ZDialogConfirmUI = (props) => {
  const { options, close, handleCancel, handleConfirm } = props

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
                  dangerouslySetInnerHTML={{ __html: options.slot }}
                >
                </div>
                :
                null
              }
            </div>

            <div className='actions'>
              <div 
                className='left' 
                onClick={ handleCancel }
              >取消</div>

              <div 
                className='right' 
                onClick={ handleConfirm }
              >确认</div>
            </div>
          </div>
        </DialogConfirmWrapper>
        :
        null
      }
    </React.Fragment>
  )
}

export default ZDialogConfirmUI