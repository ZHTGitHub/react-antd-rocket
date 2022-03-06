import { fromJS } from 'immutable'
import * as types from './actionTypes'

const defaultState = fromJS({
  visible: false
})

const reducer = (state = defaultState, action) => {
  const { type, payload } = action

  if(type === types.DRAWER_TOGGLE_VISIBLE) {
    return state.set('visible', !payload.visible)
  }

  return state
}

export default reducer