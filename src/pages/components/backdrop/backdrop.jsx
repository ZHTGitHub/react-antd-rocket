import React from 'react'
import { Button } from 'antd'

const Backdrop = () => {
  const openBackdrop = () => {

  }

  return (
    <div className='backdrop'>
      <Button onClick={ openBackdrop }>OPEN BACKDROP</Button>
    </div>
  )
}

export default Backdrop