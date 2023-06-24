export const statusCode = {
    state: () => ({
      SYSTEM_1000: "操作成功。",
      SYSTEM_1001: "請求參數缺失、錯誤。",
      SYSTEM_1002: "請求過於頻繁， IP 位置已被暫時封鎖。",
      SYSTEM_1003: "IP 位置已被永久封鎖。",
      USER_2011: "登入失敗，驗證資訊錯誤。",
      USER_2012: "登入失敗，帳號已被停權。",
      USER_2021: "用戶密碼不符合規定。",
      USER_2023: "用戶姓名不符合規定。",
      USER_2041: "帳號／手機號碼已經被使用。"
    }),
    mutations: {},
    actions: {},
    getters: {},
  };
  