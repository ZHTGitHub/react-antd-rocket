import React from 'react'
import { Outlet } from 'react-router-dom'

import { MainWrapper } from './style'

const Components = () => {
  return (
    <MainWrapper className="z-flex">
      <Outlet />
    </MainWrapper>
  )
}

export default Components