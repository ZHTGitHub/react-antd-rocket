import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MenuWrapper } from './style'

const ZMenu = (props) => {
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState()

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if(props.items.length) {
      if(location.pathname.substr(18)) {
        setSelected(location.pathname.substr(18))
      }else {
        setSelected(props.items[0].children[0].value)
      }
      setItems(props.items)
    }
  }, [props.items])

  const switchMenu = (child) => {
    navigate(child.pathname)
    setSelected(child.value)
  }

  return (
    <MenuWrapper>
      <section className='menu-inner'>
        {
          items.map(item => {
            return (
              <ul 
                className='menu-site'
                key={ item.value }
              >
                <li className='menu-item-group'>
                  <div className='menu-item-group-title'>{ item.label }</div>

                  {
                    item.children.map(child => {
                      return (
                        <ul 
                          className='menu-item-group-list'
                          key={ child.value }
                        >
                          <li 
                            className={ `${ child.value === selected ? 'ant-menu-item-selected ' : '' }ant-menu-item menu-item-only-child` }
                            onClick={ () => switchMenu(child) }
                          >{ child.label }</li>
                        </ul>
                      )
                    })
                  }
                </li>
              </ul>
            )
          })
        }
      </section>
    </MenuWrapper>
  )
}

export default ZMenu