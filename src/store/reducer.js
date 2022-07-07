import { combineReducers } from 'redux-immutable'
import { formsReducer } from './forms'

const reducer = combineReducers({
  forms: formsReducer
})

export default reducer