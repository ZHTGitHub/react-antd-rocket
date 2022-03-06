import * as types from './actionTypes'

export const getDrawerToggleVisible = (visible) => ({
  type: types.DRAWER_TOGGLE_VISIBLE,
  payload: {
    visible
  }
})