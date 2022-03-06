import React from 'react'
import { ZHeader, ZDrawer } from '../../components'

class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='main-layout'>
        <ZHeader></ZHeader>
        <ZDrawer></ZDrawer>
      </div>
    )
  }
}

export default MainLayout