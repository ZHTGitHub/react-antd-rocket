import React from 'react'
import { ModalUIWrapper } from './style'

const ModalUI = (props) => {
  const { visible, options, close, handleCancel, handleConfirm } = props
  const { title, content, slot, __html, width, isAlert } = options

  return (
    <React.Fragment>
      {
        visible 
        ?
        <ModalUIWrapper>
          <div className='backdrop' onClick={ close }></div>

          <div 
            className='modal'
            style={{
              width: `${ width }px`
            }}
          >
            {
              title
              ?
              <div className='title'>
                { title }
              </div>
              : 
              null
            }

            <div className='content'>
              {
                content
                ?
                <div className='message'>
                  { content }
                </div>
                :
                null
              }

              {
                slot
                ?
                <div className='slot'>
                  { slot }
                </div>
                :
                null
              }

              {
                __html
                ? 
                <div 
                  className='html' 
                  dangerouslySetInnerHTML={{ __html }}
                >
                </div>
                :
                null
              }
            </div>

            <div className={ !isAlert ? 'confirm actions' : 'actions' }>
              {
                !isAlert
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
        </ModalUIWrapper>
        :
        null
      }
    </React.Fragment>
  )
}

export default ModalUI