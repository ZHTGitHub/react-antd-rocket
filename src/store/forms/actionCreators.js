import * as constants from './constants'

export const setFormValueByKey = ({ formId, formKey, value }) => ({
  type: constants.SET_FORM_VALUE_BY_KEY,
  payload: {
    formId,
    formKey,
    value
  }
})