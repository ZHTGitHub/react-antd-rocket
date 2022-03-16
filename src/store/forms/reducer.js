import * as constants from './constants'
import _ from 'lodash'

const defaultState = {
  forms: {}
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case constants.SET_FORM_VALUE_BY_KEY:
      const updatedState = JSON.parse(JSON.stringify(state))
      const updatedForm = { ...state.forms }
      const { formId, formKey, value } = payload

      _.set(updatedForm, formId + '.' + formKey, value)

      _.assign(updatedState.forms, updatedForm)

      console.log(updatedState)

      return updatedState
  
    default:
      return state
  }
}

export default reducer