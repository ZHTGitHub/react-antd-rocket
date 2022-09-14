import * as React from 'react'
import PropTypes from 'prop-types'
import request from './request'
import { UploadWrapper, UploadList, UploadListContainer, UploadSelect } from './styled'
import tools from '../../utils/tools'

const defaultFileInfo = {
  file: void 0,
  url: ''
}

const Upload = (props) => {
  const { action, children, className, color, data, defaultValue, disabled, headers, maxCount, method, name, origin, size } = props
  const fileInputRef = React.useRef()
  const [fileInfo, setFileInfo] = React.useState(defaultFileInfo)
  const [images, setImages] = React.useState([])

  // ============================= Effect =============================
  React.useEffect(() => {
    if(fileInfo.file && props.onChange) {
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
      fileInputRef.current.click()
    }
  }

  // 读取文件信息
  const readFile = (event) => {
    const file = event.target.files[0]
    // const url = URL.createObjectURL(file)
    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)

    fileReader.addEventListener('load', (event) => {
      const { error, result: url } = event.target

      !error && setFileInfo({ file, url })
    })
  }

  // 上传文件
  const uploadFile = async () => {
    const response = await request({ 
      action, 
      data,
      file: fileInfo.file, 
      headers, 
      method, 
      name 
    })
    
    if(props.onResponse) {
      props.onResponse(response) 
    }
  }

  // 预览
  const onPreview = (index) => {
    console.log(index)
  }

  // 删除
  const onRemove = (index) => {
    const newImages = tools.deepClone(images)

    newImages.splice(index, 1)

    setImages(newImages)
  }

  return (
    <UploadWrapper className={ className }>
      <UploadList>
        {
          images?.map((value, index) => (
            <UploadListContainer 
              key={ `uploadListContainer${ index }` }
              size={ size }
            >
              <div className="z-upload-list-item">
                <div className="z-upload-list-item-info">
                  <span className="z-upload-span">
                    <a 
                      className="z-upload-list-item-thumbnail"
                      href={ origin ? `${ origin }/${ value.url }` : value.url }
                    >
                      <img 
                        className="z-upload-list-item-image"
                        src={ origin ? `${ origin }/${ value.url }` : value.url }
                      />
                    </a>
                  </span>
                </div>

                <span className="z-upload-list-item-actions">
                  <span 
                    className="icon icon-eye"
                    onClick={ () => onPreview(index) }
                  ></span>

                  <span 
                    className="icon icon-trash"
                    onClick={ () => onRemove(index) }
                  ></span>
                </span>
              </div>
            </UploadListContainer>
          ))
        }
        
        <UploadSelect 
          color={ color }
          disabled={ disabled }
          size={ size }
          style={{
            display: !maxCount || (images.length < maxCount) ? 'inline-block' : 'none'
          }}
          onClick={ previewFile }
        >
          <span className="z-upload">
            <input 
              ref={ fileInputRef }
              style={{ display: 'none' }} 
              type="file" 
              onChange={ readFile }
            />
            {
              children
              ||
              <div>
                <span className="plus">+</span>
                <div className="label">Upload</div>
              </div>
            }
          </span>
        </UploadSelect>
      </UploadList>
    </UploadWrapper>
  )
}

Upload.propTypes = {
  // 上传的地址
  action: PropTypes.string.isRequired,
  // 主题
  color: PropTypes.string,
  // 上传所需额外参数
  data: PropTypes.object,
  // 默认值
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  // 是否禁用
  disabled: PropTypes.bool,
  // 设置上传的请求头部
  headers: PropTypes.object,
  // 限制上传数量
  maxCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // 限制上传大小
  maxSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // 上传请求的 http method
  method: PropTypes.oneOf(['POST', 'GET']),
  // 发到后台的文件参数名
  name: PropTypes.string,
  // URL 基础地址
  origin: PropTypes.string,
  // 上传文件改变时的状态
  onChange: PropTypes.func,
  // 后台返回的结果
  onResponse: PropTypes.func,
  // 组件大小
  size: PropTypes.oneOf(['small', 'medium'])
}

Upload.defaultProps = {
  color: '#1976d2',
  disabled: false,
  method: 'POST',
  name: 'file',
  size: 'medium'
}

export default Upload