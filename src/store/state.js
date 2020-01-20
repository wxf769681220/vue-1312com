// 重载页面时，state 的值从 sessionStorage 中获取
const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
  token: '',
  userName: '',
  wxInfo: {}
}

export default state
