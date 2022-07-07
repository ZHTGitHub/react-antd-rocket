import React from 'react'
import { connect } from 'react-redux'
import { pagesComponentsCreators } from 'store/pages'
import { ZHeader, ZMenu } from '../../components'

const MainLayout = (props) => {
  const { children } = props
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    getMenu()
  }, [])  // eslint-disable-line

  const getMenu = async () => {
    const result = await props.getMenu()

    if(result.code === 200) {
      setItems(result.items)
    }
  }

  return (
    <div className='main-layout'>
      <ZHeader></ZHeader>

      <div className="z-flex">
        <ZMenu items={ items }></ZMenu>
        <div className="flex-grow-1 pa-4 main">
          { children }
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  async getMenu() {
    return await dispatch(pagesComponentsCreators.getMenu())
  }
})

export default connect(null, mapDispatchToProps)(MainLayout)