import styled from 'styled-components'

export const DialogConfirmWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  outline: none;
  z-index: 202;

  .overlay {
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

  .dialog {
    position: absolute;
    width: 320px;
    border-radius: 8px;
    background-color: #f9f9f9;
    z-index: inherit;

    .title {
      padding-top: 24px;
      color: #323233;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }

    .content {
      padding-bottom: 24px;

      .message {
        padding: 4px 24px 0 24px;
        color: #646566;
        text-align: center;
      }

      .slot {
        padding: 16px 24px 0 24px;
      }
    }

    .actions {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 48px;
      border-top: 1px solid #d4d4d4;
      cursor: pointer;

      .left {
        flex: 1;
        height: 48px;
        line-height: 48px;
        color: #323233;
        text-align: center;
      }

      .right {
        flex: 1;
        height: 48px;
        line-height: 48px;
        color: #ff5252;
        text-align: center;
      }
    }

    &::after {
      content: " ";
      position: absolute;
      /* top: 0; */
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 1px;
      height: 48px;
      background-color: #d4d4d4;
    }
  }

  .show {
    display: block;
  }

  .hide {
    display: hidden;
  }
`