import * as React from 'react'
import PropTypes from 'prop-types'
import request from './request'
import { UploadWrapper, UploadList, UploadListContainer, UploadSelect } from './styled'
import tools from 'packages/utils'

const defaultFileInfo = {
  file: void 0,
  url: ''
}

const Upload = (props) => {
  const { action, color, defaultValue, disabled, headers, limit, method, name } = props
  const [fileInfo, setFileInfo] = React.useState(defaultFileInfo)
  const [images, setImages] = React.useState([])

  // ============================= Effect =============================
  React.useEffect(() => {
    if(fileInfo.file) {
      props.onChange(fileInfo)
      uploadFile()
    }
  }, [fileInfo.file])

  React.useEffect(() => {
    if(defaultValue) {
      setImages(defaultValue)
    }
  }, [defaultValue])

  // ============================= Events =============================
  const previewFile = () => {
    if(!disabled) {
      const fileInput = document.querySelector('.z-upload input[type=file]')
      fileInput.click()
    }
  }

  const readFile = (event) => {
    const file = event.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('load', (event) => {
      const { error, result: url } = event.target

      if(!error) {
        setFileInfo({
          file,
          url
        })
      }
    })
  }

  const uploadFile = async () => {
    const response = await request({ action, file: fileInfo.file, headers, method, name })
    // props.onResponse(response) 
    props.onResponse({
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    })
  }

  const onPreview = () => {

  }

  const onRemove = (index) => {
    const newImages = tools.deepClone(images)

    newImages.splice(index, 1)

    setImages(newImages)
  }

  return (
    <UploadWrapper>
      <UploadList>
        {
          images?.map((value, index) => (
            <UploadListContainer key={ `uploadListContainer${ index }` }>
              <div className="z-upload-list-item">
                <div className="z-upload-list-item-info">
                  <span className="z-upload-span">
                    <a 
                      className="z-upload-list-item-thumbnail"
                      href={ value.url }
                    >
                      <img 
                        className="z-upload-list-item-image"
                        src={ value.url }
                      />
                    </a>
                  </span>
                </div>

                <span className="z-upload-list-item-actions">
                  <span 
                    className="eye"
                    onClick={ onPreview }
                  >eye</span>

                  <span 
                    className="delete"
                    onClick={ () => onRemove(index) }
                  >del</span>
                </span>
              </div>
            </UploadListContainer>
          ))
        }
        
        <UploadSelect 
          color={ color }
          disabled={ disabled }
          style={{
            display: !limit || (images.length < limit) ? 'inline-block' : 'none'
          }}
          onClick={ previewFile }
        >
          <span className="z-upload">
            <input 
              type="file" 
              style={{ display: 'none' }} 
              onChange={ readFile }
            />

            <div>
              <span className="plus">+</span>
              <div className="label">Upload</div>
            </div>
          </span>
        </UploadSelect>
      </UploadList>
    </UploadWrapper>
  )
}

Upload.propTypes = {
  action: PropTypes.string.isRequired,
  color: PropTypes.string,
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  disabled: PropTypes.bool,
  headers: PropTypes.object,
  limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  method: PropTypes.oneOf(['POST', 'GET']),
  name: PropTypes.string,
  onChange: PropTypes.func,
  onResponse: PropTypes.func
}

Upload.defaultProps = {
  color: '#1976d2',
  disabled: false,
  method: 'POST',
  name: 'file'
}

export default Upload