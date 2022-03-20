import React from 'react'
import { ZDialogWrapper } from './style'

const ZDialogUI = (props) => {
  const { visible, options, close, handleCancel, handleConfirm } = props

  return (
    <React.Fragment>
      {
        visible 
        ?
        <ZDialogWrapper>
          <div className='overlay' onClick={ close }></div>

          <div className='dialog'>
            {
              options.title
              ?
              <div className='title'>
                { options.title }
              </div>
              : 
              null
            }

            <div className='content'>
              {
                options.content
                ?
                <div className='message'>
                  { options.content }
                </div>
                :
                null
              }

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

            <div className={ !options.isAlert ? 'confirm actions' : 'actions' }>
              {
                !options.isAlert
                ?
                <div 
                  className='cancel' 
                  onClick={ handleCancel }
                >取消</div>
                :
                null
              }

              <div 
                className='confirm' 
                onClick={ handleConfirm }
              >确认</div>
            </div>
          </div>
        </ZDialogWrapper>
        :
        null
      }
    </React.Fragment>
  )
}

export default ZDialogUI