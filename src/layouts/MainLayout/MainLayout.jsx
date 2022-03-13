import React from 'react'
import { ZHeader, ZDrawer } from '../../components'

class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props

    return (
      <div className='main-layout'>
        <ZHeader></ZHeader>
        <ZDrawer></ZDrawer>
        { children }
      </div>
    )
  }
}

export default MainLayout