import styled from 'styled-components'

export const ModalUIWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  outline: none;
  z-index: 9999999;

  /* 遮罩 */
  .backdrop {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-color: rgb(33, 33, 33);
    background-color: rgb(33, 33, 33);
    opacity: .46;
    transition: all .3s ease;
    z-index: inherit;
  }

  .modal {
    position: absolute;
    padding-top: 24px;
    border-radius: 8px;
    background-color: #f9f9f9;
    z-index: inherit;

    /* 标题 */
    .title {
      color: #323233;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }

    /* 内容 */
    .content {
      padding: 24px;
      color: #646566;
      text-align: center;
    }

    /* 操作 */
    .actions {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 48px;
      border-top: 1px solid #d4d4d4;
      cursor: pointer;

      &.confirm::after {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 1px;
        height: 48px;
        background-color: #d4d4d4;
      }

      .cancel, .confirm {
        flex: 1;
        height: 48px;
        line-height: 48px;
        text-align: center;
      }

      .cancel {
        color: #323233;
      }

      .confirm {
        color: #ff5252;
      }
    }
  }
`