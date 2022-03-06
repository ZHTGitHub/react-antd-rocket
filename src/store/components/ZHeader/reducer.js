import { fromJS } from 'immutable'
import * as types from './actionTypes'

const defaultState = fromJS({
  items: [
    { label: '组件', value: 'component' },
    { label: '表单', value: 'form' },
    { label: 'JS Util', value: 'util' },
    { label: '样式', value: 'style' }
  ],
  tab: 'component'
})

const reducer = (state = defaultState, action) => {
  const { type, payload } = action

  if(type === types.HEADER_SWITCH_TABS) {
    return state.set('tab', payload.tab)
  }

  return state
}

export default reducer