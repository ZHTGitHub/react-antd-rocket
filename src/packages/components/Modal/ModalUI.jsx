import React from 'react'
import { ModalUIWrapper } from './style'

const ModalUI = (props) => {
  const { visible, options, close, handleCancel, handleConfirm } = props
  const { title, content, slot, html, width, isAlert } = options

  return (
    <React.Fragment>
      {
        visible 
        ?
        <ModalUIWrapper>
          <div className='backdrop' onClick={ close }></div>

          <div className='modal' style={{ width: `${ width }px` }}>
            { title ? <div className='title'>{ title }</div> : void 0 }

            <div className='content'>
              { content ? <div className='message'>{ content }</div> : void 0 }

              { slot ? <div className='slot'>{ slot }</div> : void 0 }

              { html ? <div dangerouslySetInnerHTML={{ __html: html }}></div> : void 0 }
            </div>

            <div className={ !isAlert ? 'confirm actions' : 'actions' }>
              { !isAlert ? <div className='cancel' onClick={ handleCancel }>取消</div> : void 0 }

              <div className='confirm' onClick={ handleConfirm }>确认</div>
            </div>
          </div>
        </ModalUIWrapper>
        :
        void 0
      }
    </React.Fragment>
  )
}

export default ModalUI