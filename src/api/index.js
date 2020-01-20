import BaseUrl from './config'
import { post } from 'common/js/axios'

const userRegister = post(BaseUrl + '/user/register')
const userLogin = post(BaseUrl + '/user/login')

// 获取openid POST / getAccessToken 参数 code 返回 { code: 200, access_token, openid }
const getAccessToken = post(BaseUrl + '/pay/getAccessToken')

//  参数 openid 返回 已绑定{ code: 200, phone: user.mobile } 未绑定{ code: 200 }
const checkBindPhone = post(BaseUrl + '/pay/checkBindPhone')

// 绑定手机 POST / bindPhone 参数 openid, phone 返回 { code: 200 }
const bindPhone = post(BaseUrl + '/pay/bindPhone')

// 领取红包 POST /getRedpack 参数 id, count, openid  count单位：分 id是这个接口返回的
const getRedpack = post(BaseUrl + '/pay/getRedpack')

// 查找我的推广红包
const findPromoterRedpackRecord = post(BaseUrl + '/management/findPromoterRedpackRecord')

// 根据手机号获取用户信息
const getInfoByPhone = post(BaseUrl + '/user/getInfoByPhone')

// 手机充值
const wxPayStart = post(BaseUrl + '/pay/wxPayStart')

// 手机验证吗
const sendVerifyCode = post(BaseUrl + '/user/sendVerifyCode')

// { code: 33100 } 该微信账号已注册过账号，请直接在游戏登录界面点击微信登录游戏
const checkUnionId = post(BaseUrl + '/pay/checkUnionId')

/**
 * 注册用户
 * 参数 	unionid, mobile, faceID, gender, nickName, fatherUid, sources, activityID, pwd
 * { code: 33100, msg: "该微信账号已注册过账号，请直接在游戏登录界面点击微信登录游戏" })
 * { code: 33101, msg: "该手机号已绑定过账号，请直接在游戏登录界面输入手机号登录游戏" }
 */
const createWxUser = post(BaseUrl + '/pay/createWxUser')

export {
  userRegister,
  userLogin,
  getAccessToken,
  checkBindPhone,
  bindPhone,
  getRedpack,
  findPromoterRedpackRecord,
  getInfoByPhone,
  wxPayStart,
  sendVerifyCode,
  checkUnionId,
  createWxUser
}
