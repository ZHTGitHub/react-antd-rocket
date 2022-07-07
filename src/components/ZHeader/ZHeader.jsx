import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { HeaderWrapper } from './style'
import { headerCreators } from '../../store/components'

const ZHeader = (props) => {
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState()

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const splitPathname = location.pathname.split('/')
    setSelected(splitPathname[2])

    getTabs()
  }, [])  // eslint-disable-line

  const getTabs = async () => {
    const result = await props.getTabs()

    if(result.code === 200) {
      setItems(result.items)
    }
  }

  const navigateHome = () => {
    navigate('/pages')
  }

  const switchTabs = (item) => {
    setSelected(item.value)
    navigate(item.pathname)
  }

  return (
    <HeaderWrapper className="z-flex justify-between">
      <div>
        <h1 onClick={ navigateHome }>React Antd Rocket</h1>
      </div>

      <div className='menu-row z-row'>
        <ul className='z-menu'>
          {
            items.map(item => (
              <li 
                key={ item.value }
                className={ item.value === selected ? 'actived z-menu-item' : 'z-menu-item' }
                onClick={ () => switchTabs(item) }
              >{ item.label }</li>
            ))
          }
        </ul>
      </div>
    </HeaderWrapper>
  )
}

const mapDispatchToProps = (dispatch) => ({
  async getTabs() {
    return await dispatch(headerCreators.headerGetTabs())
  }
})

export default connect(null, mapDispatchToProps)(ZHeader)
