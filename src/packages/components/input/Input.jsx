import React from 'react'
import { Input } from 'antd'

function ZInput(props) {
  const { label, ...rest } = props

  return <div>
    { label && <label>{ label }</label> }
    
    <Input 
      { ...rest } 
    />
  </div>
}

export default ZInput