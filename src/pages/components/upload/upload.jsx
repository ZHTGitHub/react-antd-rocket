import React from 'react'
import { ZUpload } from 'packages'

const Upload = () => {
  const [list, setList] = React.useState([
  {
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },

  {
    url: 'https://cdn.vuetifyjs.com/images/john.jpg'
  },

  {
    url: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
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
        size="small"
        onChange={ handleChange } 
        onResponse={ handleResponse }
      >
      </ZUpload>
    </div>
  )
}

export default Upload