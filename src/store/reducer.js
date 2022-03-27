import { combineReducers } from 'redux-immutable'
import { formsReducer } from './forms'

import { 
  drawerReducer 
} from './components'

const reducer = combineReducers({
  forms: formsReducer,
  drawer: drawerReducer
})

export default reducer