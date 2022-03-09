import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { HeaderWrapper } from './style'
import { headerCreators, drawerCreators } from '../../store/components'

class ZHeader extends React.Component {
  componentDidMount() {
    this.props.getTabs()
  }

  render() {
    const { visible, tabs, tab, handleToggle, handleSwitch } = this.props
    
    return (
      <HeaderWrapper>
        <Row>
          <Col className='z-row' xs={ 24 } sm={ 24 } md={ 6 } lg={ 6 } xl={ 5 } xxl={ 4 }>
            <h1>LOGO</h1>
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
                    onClick={ () => handleSwitch(item.value) }
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

  handleSwitch(tab) {
    dispatch(headerCreators.headerSwitchTab(tab))
  },

  handleToggle(visible) {
    dispatch(drawerCreators.getDrawerToggleVisible(visible))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ZHeader)
