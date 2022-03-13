import React, { useRef } from 'react'
import { Button } from 'antd'
import { MainLayout } from '../../layouts'
import { ZDialog, ZDialogConfirm } from '../../components'

const Home = (props) => {
  const dialogRef = useRef()

  const handleOpen = () => {
    // dialogRef.current.open()
    ZDialogConfirm.confirm({
      visible: true,
      title: '删除警告',
      content: '请确认是否要删除当前选项？',
      confirm: () => {
        alert()
      }
    })
  }

  return (
    <div className='home'>
      <MainLayout>
        <Button onClick={ handleOpen }>TOGGLE</Button>

        <ZDialog 
          ref={ dialogRef }
        >
          233
        </ZDialog>
      </MainLayout>
    </div>
  )
}

export default Home