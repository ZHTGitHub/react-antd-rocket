import React from 'react'
import { ZHeader, ZDrawer } from '../../components'

const MainLayout = (props) => {
  const { children } = props

  return (
    <div className='main-layout'>
      <ZHeader></ZHeader>
      <ZDrawer></ZDrawer>
      { children }
    </div>
  )
}

export default MainLayout