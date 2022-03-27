import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { MainLayout } from 'layouts'

const Pages = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export default Pages