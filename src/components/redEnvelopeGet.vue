<template>
  <div class="redEnvelopeGet">
    <div class="redEnvelopeGet-header">
      <div class="content">
        <p>红包领取</p>
      </div>
    </div>
    <div class="redEnvelopeGet-body">
      <div class="content">
        <p class="pt-5">红包永久有效，可在1312耍大牌手机端兑换金币!</p>
        <p class="pt-2 pb-5">微信和客户端绑定手机号必须一致!</p>

        <h4 v-show="mobile">当前绑定的手机号：{{mobile}}</h4>
        <div v-show="!mobile">
          <h4>您还没有绑定手机!</h4>
          <Button class="mt-3" type="warning" size="large" style="width: 80%" @click="onBindPhone">绑定手机号</Button>
        </div>

        <h3 class="py-5" v-show="!packetInfo.myCount">您没有未领取的红包!</h3>
        <div class="py-5" v-show="packetInfo.myCount">
          <p >当前您未领取的红包数额为：{{packetInfo.myCount/100 }}元</p>
          <Button
            class="btn-envelope mt-3"
            type="warning"
            size="large"
            style="width: 100%"
            @click="getRedEnvelope"
            :disabled="invalid || packetInfo.myCount < packetInfo.minGetCount"
          >领取红包</Button>
        </div>
      </div>
    </div>
    <div class="redEnvelopeGet-footer">
      <div class="content">
        <div>1、红包金额累计超过{{packetInfo.minGetCount ? packetInfo.minGetCount/100 : 50}}元人民币时，方可领取。</div>
        <div>2、单个红包上限200元，每人每天最多领取5个红包。</div>
        <div class="text-warning">3、注意：领取红包后，请返回公众号拆开红包。</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'iview'
import { checkBindPhone, getAccessToken, getRedpack } from 'api'

import axios from 'axios'
import MD5 from 'js-md5'

export default {
  name: 'redEnvelopeGet',
  props: {},
  data() {
    return {
      mobile: '',
      packetInfo: {
        desc: '',
        id: 0,
        minGetCount: 0,
        myCount: ''
      },
      invalid: false
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    this.code = this.$route.query.code
    // alert('code：' + this.code)
    if (this.code) {
      this._getAccessToken()
    } else {
      console.log('无法获取code!')
    }
  },
  methods: {
    _getAccessToken() {
      getAccessToken({
        code: this.code
      }).then(res => {
        if (res.code === 200) {
          this.openid = res.openid
          this.token = res.access_token
          // alert('openid' + this.openid)
          // alert('token' + this.token)
          this._checkBindPhone()
        }
      })
    },
    _checkBindPhone() {
      checkBindPhone({
        openid: this.openid
      }).then(res => {
        // alert('result：' + JSON.stringify(res))
        if (res.code === 200) {
          let isPhone = res.hasOwnProperty('phone')
          if (isPhone) {
            this.mobile = res.phone
            this.getData()
          } else {
            this.mobile = ''
          }
        } else {
          alert('检测手机号是否已经绑定时出错!')
        }
      })
    },
    getData() {
      let body = {}
      body.msg = JSON.stringify({
        mobile: this.mobile
      })
      let url = `http://game.1312.com:6100/management/entry?token=${MD5(
        body.msg + 'gd1312'
      )}`
      // alert('url' + url)
      axios
        .post(url, {
          type: 'findPromoterRedpackRecord',
          msg: body.msg
        })
        .then(res => {
          const { status, data } = res
          if (status === 200) {
            // alert('data:' + JSON.stringify(data))
            if (data.code === 200) {
              // alert('红包：' + JSON.stringify(res))
              this.packetInfo.id = data.id
              this.packetInfo.myCount = data.mycount // 200：表示200分
              this.packetInfo.minGetCount = data.minGetCount
            } else if (data.code === 37006) {
              alert('红包未达到指定额度无法领取!')
              this.packetInfo.myCount = data.mycount ? data.mycount : 0 // 200：表示200分
              this.packetInfo.minGetCount = data.minGetCount
            } else {
              console.log('其他状态!')
              this.packetInfo.myCount = 0 // 200：表示200分
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getRedEnvelope() {
      this.invalid = true
      getRedpack({
        id: this.packetInfo.id,
        count: this.packetInfo.myCount,
        openid: this.openid
      }).then(res => {
        this.invalid = false
        // alert('领取红包：' + JSON.stringify(res))
        if (res.code === 200) {
          alert('红包领取成功!')
          // this.reload()
          this.getData()
        } else if (res.code === 20106) {
          alert(res.desc)
        } else if (res.code === 37005) {
          alert('没有红包可领取!')
        } else if (res.code === 37006) {
          alert('红包未达到指定额度无法领取!')
        } else if (res.code === 37007) {
          alert('未查询到对应用户，请确认公众号绑定手机号和游戏账号绑定手机号是否一致!')
        } else {
          alert('未知原因导致红包领取失败,请联系客服!')
        }
      })
    },
    onBindPhone() {
      let redirectUri = encodeURIComponent('http://node.1312.com/redEnvelopeMobBind')
      let wechatRedirect = encodeURIComponent('#wechat_redirect')
      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx771b199dc379218e&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_base&state=123${wechatRedirect}`
      window.location.href = url
      // this.$router.push(
      //   {
      //     path: '/redEnvelopeMobBind',
      //     query: {
      //       code: this.code
      //     }
      //   }
      // )
    }
  },
  components: {
    Button
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.redEnvelopeGet
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 9
  background-image: url('..//common/img/redenvelope_bg.jpg') // common/img/redenvelope_bg.jpg)
  background-repeat: no-repeat
  background-size: 100% 100%
  overflow-y: scroll
  .redEnvelopeGet-header
    background-color: rgb(228, 60, 60)
    .content
      padding: 15px 0
      font-size: 16px
      color: white
      text-align: center
  .redEnvelopeGet-body
    .content
      padding: 0 20px
      font-size: 16px
      color: white
      text-align: center
  .redEnvelopeGet-footer
    width: 100%
    .content
      margin: 0 auto
      padding: 10px
      width: 80%
      border: 1px solid #fff
      border-radius: 4px
      & > div
        line-height: 30px
        font-size: 14px
        color: #fff
  .btn-envelope
    font-size: 16px
    font-weight: 600
</style>
