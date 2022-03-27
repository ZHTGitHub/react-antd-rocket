import React, { useRef } from 'react'
import { Button } from 'antd'
import { ZModal, ZDialog, ZTextField } from 'packages/z-components'
import { connect } from 'react-redux'


const formId = 'Home'

const HomePage = (props) => {
  const dialogRef = useRef()

  const handleOpen = () => {
    dialogRef.current.open()

    // console.log(props.forms[formId])

    ZModal.confirm({
      title: '删除警告',
      content: '请确认是否要删除当前选项？',
      confirm: () => {
        console.log('confirm')
      },
      cancel: () => {
        console.log('cancel')
      }
    })
  }

  return (
    <div className='home'>
      <div className='home'>
        <Button onClick={ handleOpen }>TOGGLE</Button>

        <ZTextField 
          formId={ formId }
          formKey='firstName'
        ></ZTextField>

        <ZTextField 
          formId={ formId }
          formKey='lastName'
        ></ZTextField>


        <ZDialog 
          ref={ dialogRef }
        >
          233
        </ZDialog>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  forms: state.get('forms').forms
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)