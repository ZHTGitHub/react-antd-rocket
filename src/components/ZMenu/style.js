import styled from 'styled-components'

export const MenuWrapper = styled.div`
  box-sizing: border-box;
  width: 256px;
  max-width: 256px;
  height: calc(100vh - 64px);
  border-right: 1px solid rgba(0, 0, 0, .06);
  overflow-x: hidden;
  overflow-y: auto;

  section.menu-inner {
    ul.menu-site {
      li.menu-item-group {
        .menu-item-group-title {
          padding: 8px 16px;
          padding-left: 40px;
          margin-top: 16px;
          margin-bottom: 16px;
          line-height: 1.5715;
          color: #00000073;
          font-size: 13px;
          transition: all .3s;

          &::after {
            content: "";
            position: relative;
            display: block;
            top: 12px;
            width: calc(100% - 20px);
            height: 1px;
            background: rgba(0, 0, 0, .06);
            transition: all .3s cubic-bezier(.78,.14,.15,.86);
          }
        }

        ul.menu-item-group-list {
          li.ant-menu-item {
            position: relative;
            display: flex;
            align-items: center;
            padding: 0 16px 0 28px;
            padding-left: 40px;
            margin-top: 4px;
            height: 40px;
            line-height: 40px;
            text-overflow: ellipsis;
            cursor: pointer;
            overflow: hidden;

            &:hover {
              color: #2196f3;
            }
          }

          li.ant-menu-item-selected {
            background-color: #e6f7ff;

            &::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              border-right: 3px solid #2196f3;
            }
          }

          li.menu-item-only-child {
            
          }
        }
      }
    }
  }
`