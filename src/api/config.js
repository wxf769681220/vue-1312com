const urlMap = {
  development: 'http://47.111.191.63',
  // development: 'http://192.168.1.225',
  staging: 'http://47.111.191.63',
  production63: 'http://47.111.191.63'
}

const baseUrl = urlMap[process.env.NODE_ENV]

export default baseUrl
