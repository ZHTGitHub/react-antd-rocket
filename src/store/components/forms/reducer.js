import * as constants from './constants'

const defaultState = {
  forms: {}
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case constants.SET_FORM_VALUE_BY_KEY:
      
      break;
  
    default:
      return state
  }
}

export default reducer