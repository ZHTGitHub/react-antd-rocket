import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 64px;
  padding: 0 40px;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  z-index: 10;

  .z-row {
    height: 64px;
  }

  h1 {
    margin: 0;
    min-height: 64px;
    height: 64px;
    line-height: 64px;
  }

  .menu-row {
    display: flex;
    justify-content: flex-end;

    ul.z-menu {
      display: flex;

      li.z-menu-item {
        position: relative;
        min-height: 64px;
        height: 64px;
        padding: 0 12px;
        line-height: 64px;
        cursor: pointer;
        transition: color .3s;

        &.actived {
          color: #2196f3;
          &::after {
            border-bottom-color: #2196f3;
          }
        }

        &::after {
          position: absolute;
          content: "";
          left: 12px;
          right: 12px;
          border-bottom: 2px solid transparent;
          transition: border-color .3s cubic-bezier(.645,.045,.355,1);
        }

        &:hover {
          color: #2196f3;

          &::after {
            border-bottom-color: #2196f3;
          }
        }
      }
    }

    .setting-box {
      min-height: 64px;
      height: 64px;
      padding-left: 12px;
      line-height: 64px;
    }
  }
`