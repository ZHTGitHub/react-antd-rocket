import { request } from 'api/service'

// 获取menu
export const getMenu = () => {
  return async () => {
    const result = await request({
      url: 'api/menu/components.json'
    })

    return result
  }
}