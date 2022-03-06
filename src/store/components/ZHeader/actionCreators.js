import * as types from './actionTypes'

export const getHeaderSwitchTab = (tab) => ({
  type: types.HEADER_SWITCH_TABS,
  payload: {
    tab
  }
})