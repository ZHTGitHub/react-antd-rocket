import React from 'react'
import { connect } from 'react-redux'
import { DrawerWrapper } from './style'
import { Drawer } from 'antd'
import { drawerCreators } from '../../store/components'

class ZDrawer extends React.Component {
  render() {
    const { visible, handleToggle } = this.props

    return (
      <DrawerWrapper>
        <Drawer 
          placement='right'
          visible={ visible }
          onClose={ () => handleToggle(visible) }
        ></Drawer>
      </DrawerWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  visible: state.getIn(['drawer', 'visible'])
})

const mapDispatchToProps = (dispatch) => ({
  handleToggle(visible) {
    dispatch(drawerCreators.getDrawerToggleVisible(visible))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ZDrawer)
