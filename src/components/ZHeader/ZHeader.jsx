import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
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
    <HeaderWrapper>
      <Row>
        <Col className='z-row' xs={ 24 } sm={ 24 } md={ 6 } lg={ 6 } xl={ 5 } xxl={ 4 }>
          <h1 onClick={ navigateHome }>React Antd Rocket</h1>
        </Col>

        <Col className='menu-row z-row' xs={ 0 } sm={ 0 } md={ 18 } lg={ 18 } xl={ 19 } xxl={ 20 }>
          <div className="search-box">
          </div>

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
        </Col>
      </Row>
    </HeaderWrapper>
  )
}

const mapDispatchToProps = (dispatch) => ({
  async getTabs() {
    return await dispatch(headerCreators.headerGetTabs())
  }
})

export default connect(null, mapDispatchToProps)(ZHeader)
