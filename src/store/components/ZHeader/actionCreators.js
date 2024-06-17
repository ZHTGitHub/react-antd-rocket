import { request } from "api/service";

// 获取tabs
export const headerGetTabs = () => {
  return async () => {
    const result = await request({
      url: "api/header/tabs.json",
    });

    return result;
  };
};
