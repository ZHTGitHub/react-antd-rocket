import React, { useState, useEffect } from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { formsCreators } from 'store/forms'

const TextField = (props) => {
  const [value, setValue] = useState()

  useEffect(() => {
    console.log(value)
  }, [value])

  const handleChange = (event) => {
    const value = event.target.value
    console.log(value)
    console.log(props.formId)
    console.log(props.formKey)
    // setValue(event.target.value)
    props.changeValue({
      formId: props.formId,
      formKey: props.formKey,
      value
    })
  }

  return (
    <Input 
      value={ value }
      onChange={ handleChange }
    />
  )
}

TextField.propTypes = {
  formId: PropTypes.string,
  formKey: PropTypes.string
}

const mapStateToProps = (state) => ({
  forms: state.forms
})

const mapDispatchToProps = (dispatch) => ({
  changeValue(info) {
    // dispatch(formsCreators.setFormValueByKey(info))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TextField)

