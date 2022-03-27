import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import { pagesComponentsCreators } from 'store/pages'

import { ZMenu } from 'components'
import { MainWrapper } from './style'

const Components = (props) => {
  const [items, setItems] = useState([])

  useEffect(async () => {
    const result = await props.getMenu()
    console.log(result)

    if(result.code === 200) {
      setItems(result.items)
    }
  }, [])

  return (
    <MainWrapper>
      <div className='main-menu'>
        <ZMenu items={ items }></ZMenu>
      </div>
      
      <div className='main-container'>
        <Outlet />
      </div>
    </MainWrapper>
  )
}

const mapDispatchToProps = (dispatch) => ({
  async getMenu() {
    return await dispatch(pagesComponentsCreators.getMenu())
  }
})

export default connect(null, mapDispatchToProps)(Components)