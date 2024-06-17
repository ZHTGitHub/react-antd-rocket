import React from 'react'
import { ZUpload } from '../../../packages'

const origin = 'https://zenghaitao.oss-cn-guangzhou.aliyuncs.com'

const Upload = () => {
  const [list, setList] = React.useState([
  {
    url: 'topics/62dcf70ad6e4efffdcf6efc9-%E5%8A%B1%E5%BF%97%E6%96%87%E6%A1%88.jpg'
  },

  {
    url: 'topics/62dcf70ad6e4efffdcf6efc9-%E5%BD%A9%E8%99%B9%E5%B1%81.jpg'
  },

  {
    url: 'topics/62dcf70ad6e4efffdcf6efc9-%E5%BD%B1%E8%A7%86%E6%96%87%E6%A1%88.jpg'
  }
])

  const handleChange = (value) => {
    console.log(value)
  }

  const handleResponse = (value) => {
    setList([...list, value])
  }

  return (
    <div className='upload'>
      <ZUpload 
        action=""
        defaultValue={ list }
        maxCount={ 10 }
        maxSize={ 50 }
        origin={ origin }
        size="small"
        onChange={ handleChange } 
        onResponse={ handleResponse }
      >
      </ZUpload>
    </div>
  )
}

export default Upload