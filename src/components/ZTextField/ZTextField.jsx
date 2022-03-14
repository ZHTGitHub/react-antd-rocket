import React, { useState, useEffect } from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ZTextField = (props) => {
  const [value, setValue] = useState()

  useEffect(() => {
    console.log(value)
  }, [value])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Input 
      value={ value }
      onChange={ handleChange }
    />
  )
}

ZTextField.propTypes = {
  formId: PropTypes.string,
  formKey: PropTypes.string
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ZTextField)

