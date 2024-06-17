import React from 'react'
import { ModalUIWrapper } from './style/styled'

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

            { content ? <div className='content'>{ content }</div> : void 0 }

            { slot ? slot : void 0 }

            { html ? <div dangerouslySetInnerHTML={{ __html: html }}></div> : void 0 }

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