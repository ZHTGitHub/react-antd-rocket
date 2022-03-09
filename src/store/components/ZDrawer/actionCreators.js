import * as constants from './constants'

export const getDrawerToggleVisible = (visible) => ({
  type: constants.DRAWER_TOGGLE_VISIBLE,
  payload: {
    visible
  }
})