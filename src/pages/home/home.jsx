import React, { useEffect, useRef } from 'react'
import { ZModal } from 'packages/components'
import lodash from 'packages/utils'
import { connect } from 'react-redux'


const formId = 'Home'

const HomePage = (props) => {
  const dialogRef = useRef()

  useEffect(() => {
    console.log(lodash.queryToObject('?keyword=1&name=leslie'))
  }, [])

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
        <button 
          onClick={ handleOpen }
        >OPEN MODAL</button>
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