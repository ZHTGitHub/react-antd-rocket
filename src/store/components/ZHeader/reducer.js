import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  tabs: [],
  tab: 'components'
})

const reducer = (state = defaultState, action) => {
  const { type, payload } = action

  if(type === constants.HEADER_SWITCH_TAB) {
    console.log(payload)
    return state.set('tab', payload.tab)
  }

  if(type === constants.HEADER_SET_TABS) {
    console.log(payload)
    return state.set('tabs', fromJS(payload.tabs))
  }

  return state
}

export default reducer