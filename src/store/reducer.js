import { combineReducers } from 'redux-immutable'
import { headerReducer, drawerReducer } from './components'

const reducer = combineReducers({
  header: headerReducer,
  drawer: drawerReducer
})

export default reducer