import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { HeaderWrapper } from './style'
import { headerCreators, drawerCreators } from '../../store/components'

const ZHeader = (props) => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const pathname = location.pathname.substr(1)
    props.mapSwitch(pathname)
    props.getTabs()
  }, [])

  const navigateHome = () => {
    navigate('/')
  }

  const handleSwitch = (item) => {
    navigate(item.pathname)
    props.mapSwitch(item.value)
  }

  const { visible, tabs, tab, handleToggle } = props
  
  return (
    <HeaderWrapper>
      <Row>
        <Col className='z-row' xs={ 24 } sm={ 24 } md={ 6 } lg={ 6 } xl={ 5 } xxl={ 4 }>
          <h1 onClick={ navigateHome }>LOGO</h1>
        </Col>

        <Col className='menu-row z-row' xs={ 0 } sm={ 0 } md={ 18 } lg={ 18 } xl={ 19 } xxl={ 20 }>
          <div className="search-box">
          </div>

          <ul className='z-menu'>
            {
              tabs.map(item => (
                <li 
                  key={ item.value }
                  className={ item.value === tab ? 'actived z-menu-item' : 'z-menu-item' }
                  onClick={ () => handleSwitch(item) }
                >{ item.label }</li>
              ))
            }
          </ul>

          <div className='setting-box'>
            <SettingOutlined style={{ 
                color: 'rgba(0, 0, 0, .7)',
                fontSize: '18px' 
              }} 
              onClick={ () => handleToggle(visible) }
            />
          </div>
        </Col>
      </Row>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => ({
  visible: state.getIn(['drawer', 'visible']),
  tabs: state.getIn(['header', 'tabs']).toJS(),
  tab: state.getIn(['header', 'tab'])
})

const mapDispatchToProps = (dispatch) => ({
  getTabs() {
    dispatch(headerCreators.headerGetTabs())
  },

  mapSwitch(tab) {
    dispatch(headerCreators.headerSwitchTab(tab))
  },

  handleToggle(visible) {
    dispatch(drawerCreators.getDrawerToggleVisible(visible))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ZHeader)
