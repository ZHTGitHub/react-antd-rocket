import styled from 'styled-components'

export const UploadWrapper = styled.div`

`

export const UploadList = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
`

export const UploadListContainer = styled.div`
  display: inline-block;
  width: 104px;
  height: 104px;
  margin: 0 8px 8px 0;
  vertical-align: top;

  .z-upload-list-item {
    position: relative;
    height: 100%;
    margin: 0;
    padding: 8px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;

    &:hover {
      .z-upload-list-item-info:before, .z-upload-list-item-actions {
        opacity: 1;
      }
    }

    .z-upload-list-item-info {
      position: relative;
      height: 100%;
      padding: 0;
      overflow: hidden;

      &:before {
        content: " ";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #00000080;
        opacity: 0;
        z-index: 1;
        transition: all .3s;
      }

      .z-upload-span {
        display: block;
        width: 100%;
        height: 100%;

        .z-upload-list-item-thumbnail, .z-upload-list-item-image {
          position: static;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .z-upload-list-item-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      white-space: nowrap;
      opacity: 0;
      z-index: 10;
      transform: translate(-50%, -50%);
      transition: all .3s;

      .eye, .delete {
        width: 16px;
        margin: 0 4px;
        font-size: 16px;
        color: #ffffffd9;
        cursor: pointer;
        z-index: 10;
        transition: all .3s;
      }
    }
  }
`

export const UploadSelect = styled.div`
  box-sizing: border-box;
  width: 104px;
  height: 104px;
  margin: 0 8px 8px 0; 
  border: 1px dashed #d9d9d9;
  border-radius: 2px;
  background-color: #fafafa;
  text-align: center;
  vertical-align: top;
  cursor: ${ props => props.disabled ? 'not-allowed' : 'pointer' };
  transition: border-color .3s;

  &:hover {
    border-color: ${ props => props.disabled ? '#d9d9d9' : props.color };
  }

  .z-upload {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;

    .plus {

    }

    .label {
      margin-top: 8px;
    }
  }
`