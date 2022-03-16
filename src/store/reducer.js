import { combineReducers } from 'redux-immutable'
import { formsReducer } from './forms'

import { 
  headerReducer, 
  drawerReducer 
} from './components'

const reducer = combineReducers({
  forms: formsReducer,
  header: headerReducer,
  drawer: drawerReducer
})

export default reducer