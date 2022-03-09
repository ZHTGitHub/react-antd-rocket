import axios from 'axios'
import * as constants from './constants'

// 设置tabs
export const headerSetTabs = (tabs) => ({
  type: constants.HEADER_SET_TABS,
  payload: {
    tabs
  }
})

// 切换tab
export const headerSwitchTab = (tab) => ({
  type: constants.HEADER_SWITCH_TAB,
  payload: {
    tab
  }
})

// ajax 获取tabs
export const headerGetTabs = () => {
  return (dispatch) => {
    axios.get('/api/header_menu.json')
      .then(result => {
        dispatch(headerSetTabs(result.data.items))
      })
  }
}