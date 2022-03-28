import React from 'react'
import { Button } from 'antd'

const Dialog = () => {

  const openDialog = () => {

  }

  return (
    <div className='dialog'>
        <Button 
          onClick={ openDialog }
        >OPEN DIALOG</Button>
    </div>
  )
}

export default Dialog