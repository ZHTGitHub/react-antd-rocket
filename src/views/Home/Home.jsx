import React, { useRef } from 'react'
import { Button } from 'antd'
import { MainLayout } from '../../layouts'
import { ZModal, ZDialog, ZTextField } from '../../components'
import { connect } from 'react-redux'


const formId = 'Home'

const HomePage = (props) => {
  const madalRef = useRef()

  const handleOpen = () => {
    madalRef.current.open()

    // console.log(props.forms[formId])

    // ZDialog.confirm({
    //   title: '删除警告',
    //   content: '请确认是否要删除当前选项？',
    //   confirm: () => {
    //     console.log('confirm')
    //   },
    //   cancel: () => {
    //     console.log('cancel')
    //   }
    // })
  }

  return (
    <div className='home'>
      <MainLayout>
        <Button onClick={ handleOpen }>TOGGLE</Button>

        <ZTextField 
          formId={ formId }
          formKey='firstName'
        ></ZTextField>

        <ZTextField 
          formId={ formId }
          formKey='lastName'
        ></ZTextField>


        <ZModal 
          ref={ madalRef }
        >
          233
        </ZModal>
      </MainLayout>
    </div>
  )
}

const mapStateToProps = (state) => ({
  forms: state.get('forms').forms
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)