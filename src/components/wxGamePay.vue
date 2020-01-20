<template>
  <div class="wxGamePay">
    <div class="wxGamePay-header">
      <div class="content">
        <p class="fs">请选择需要充值的数额：</p>
      </div>
    </div>
    <div class="wxGamePay-body">
      <div class="content">
        <div class="item-group">
          <div class="item-label" :class="{ 'selected': selected === item.id }" v-for="item in group" :key="item.id" @click="onSubmit(item.id)">
            <div class="item-text">
              <span>{{item.coin}}</span>
              <span>金币</span>
            </div>
            <div class="item-price">
              <span>售价：</span>
              <span>{{item.price}}</span>
              <span>元</span>
            </div>
          </div>
        </div>
        <Divider dashed />
        <ValidationObserver class="form" tag="form" ref="observer" v-slot="{ valid }">
          <!-- 比赛名称 -->
          <validation-provider tag="div" rules="required|numeric|length:11" v-slot="{ errors }">
            <div class="input-group">
              <label class="label">
                <span>手机号：</span>
                <small class="text-error">{{errors[0]}}</small>
              </label>
              <input class="input-control" type="text" v-model="mobile" />
            </div>
          </validation-provider>
          <Button class="btn-pay" type="success" :size="'large'" :disabled="!valid" @click="payConfirm">充值</Button>
        </ValidationObserver>
      </div>
    </div>

    <Modal class="modal-error-tip" v-model="modalTip" footer-hide class-name="vertical-center-modal" @on-cancel="modalTipCancel">
      <p class="py-3" v-text="msg" style="font-size: 16px"></p>
    </Modal>

    <Modal class="modal-pay" :mask-closable="false" v-model="modalPay" title='充值确认' class-name="vertical-center-modal" okText="确认充值" @on-ok="modalPayConfirm" @on-cancel="modalPayCancel">
      <div class="content">
        <div class="content-inline">
          <span class="lab">手机号码：</span>
          <span class="text">{{userInfo.mobile}}</span>
        </div>
        <div class="content-inline">
          <span class="lab">游戏账号：</span>
          <span class="text">{{userInfo.userName}}</span>
        </div>
        <div class="content-inline">
          <span class="lab">游戏昵称：</span>
          <span class="text">{{userInfo.nickName}}</span>
        </div>
        <div class="content-inline">
          <span class="lab">充值金币：</span>
          <span class="text">{{selectedItem.coin}}</span>
        </div>
        <div class="content-inline">
          <span class="lab">支付金额：</span>
          <span class="text">{{selectedItem.price}}</span>
          <span class="text">元</span>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { Button, Divider, Modal } from 'iview'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, numeric, length } from 'vee-validate/dist/rules'
import { getInfoByPhone, wxPayStart, getAccessToken } from 'api'

export default {
  name: 'wxGamePay',
  props: {},
  data() {
    return {
      group: [
        { id: 1, coin: '10', price: 1 },
        { id: 2, coin: '50', price: 5 },
        { id: 3, coin: '105', price: 10 },
        { id: 4, coin: '550', price: 50 },
        { id: 5, coin: '1100', price: 100 },
        { id: 6, coin: '2300', price: 200 },
        { id: 7, coin: '5750', price: 500 },
        { id: 8, coin: '12000', price: 1000 }
      ],
      selected: 1,
      userId: 0,
      mobile: '',
      modalTip: false,
      modalPay: false,
      msg: '',
      userInfo: {
        mobile: '',
        userName: '',
        nickName: ''
      },
      token: '',
      openid: '',
      wx: {
        appId: '',
        timeStamp: 0,
        nonceStr: '',
        package: '',
        signType: '',
        paySign: ''
      }
    }
  },
  computed: {
    selectedItem() {
      let obj = {}
      this.group.forEach(item => {
        if (item.id === this.selected) {
          obj = item
        }
      })
      return obj
    }
  },
  watch: {},
  mounted() {},
  created() {
    this.$emit('currentPath', this.$route.path)
    this.code = this.$route.query.code
    if (this.code) {
      this.getAccessToken()
    } else {
      console.log('无法获取code!')
    }
    this.checkInput()
  },
  methods: {
    onSubmit(id) {
      console.log(id)
      this.selected = id
    },
    payConfirm() {
      getInfoByPhone({
        phone: this.mobile
      }).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.modalPay = true
          this.userInfo.mobile = res.user.mobile
          this.userInfo.userName = res.user.userName
          this.userInfo.nickName = res.user.nickName
          this.userId = res.user.id
        } else if (res.code === 11003) {
          this.modalTip = true
          this.msg = '未找到该手机号对应的账号!'
        }
      })
    },
    modalTipCancel() {
      this.mobile = ''
    },
    modalPayConfirm() {
      // console.log(this.selectedItem)
      wxPayStart({
        price: this.selectedItem.price,
        desc: this.selectedItem.coin + '金币',
        uid: this.userId,
        count: Number(this.selectedItem.coin),
        openid: this.openid
      }).then(res => {
        if (res.code === 200) {
          this.wx.appId = res.msg.appId
          this.wx.timeStamp = res.msg.timeStamp
          this.wx.nonceStr = res.msg.nonceStr
          this.wx.package = res.msg.package
          this.wx.signType = res.msg.signType
          this.wx.paySign = res.msg.paySign
          this.$nextTick(() => {
            this._weiXinJSBridge()
          })
        } else {
          alert('获取微信支付信息失败!')
        }
      })
    },
    getAccessToken() {
      getAccessToken({
        code: this.code
      }).then(res => {
        if (res.code === 200) {
          this.token = res.access_token
          this.openid = res.openid
        }
      })
    },
    _weiXinJSBridge() {
      var vm = this
      // 注意：WeixinJSBridge 内置对象在其他浏览器中无效
      if (typeof WeixinJSBridge === 'undefined') {
        if (document.addEventListener) {
          document.addEventListener(
            'WeixinJSBridgeReady',
            vm.onBridgeReady,
            false
          )
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', vm.onBridgeReady)
          document.attachEvent('onWeixinJSBridgeReady', vm.onBridgeReady)
        }
      } else {
        vm.onBridgeReady()
      }
    },
    onBridgeReady() {
      var vm = this
      console.log(vm)
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        {
          appId: this.wx.appId,
          timeStamp: this.wx.timeStamp,
          nonceStr: this.wx.nonceStr,
          package: this.wx.package,
          signType: this.wx.signType,
          paySign: this.wx.paySign
        },
        res => {
          if (res.err_msg === 'get_brand_wcpay_request:ok') {
            alert('支付成功!')
          } else {
            alert('支付错误!')
          }
        }
      )
    },
    modalPayCancel() {},
    checkInput() {
      extend('required', {
        ...required,
        message: '请输入手机号!'
      })
      extend('numeric', {
        ...numeric,
        message: '请输入11位有效手机号'
      })
      extend('length', {
        ...length,
        message: '请输入11位有效手机号'
      })
    }
  },
  components: {
    Button,
    ValidationObserver,
    ValidationProvider,
    Divider,
    Modal
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.wxGamePay
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 9
  overflow-y: scroll
  .wxGamePay-header
    .content
      padding: 20px 2.5%
      .fs
        font-size: 16px
        font-weight: 600
  .wxGamePay-body
    .content
      .item-group
        padding-bottom: 20px
      .item-group > .item-label
        display: inline-block
        margin-left: 2.5%
        margin-bottom: 2.5%
        padding: 10px 0
        width: 30%
        border: 1px solid $border-color
        border-radius: 4px
      .item-group > .item-label
        &.selected
          border-color: red
      .item-group > .item-label > .item-text
        font-size: 16px
        font-weight: 600
        color: #000
        text-align: center
      .item-group > .item-label > .item-price
        margin-top: 4px
        font-size: 14px
        font-weight: 500
        color: #f68e54
        text-align: center
      .input-control
        padding: 6px 12px
        flex: 1 1 auto
        width: auto
        min-height: 40px
        line-height: 24px
      .form
        display: block
        margin: 0 auto
        width: 80%
        .label
          display: block
          margin-bottom: 10px
          font-size: 16px
          font-weight: 600
        .input-control
          width: 100%
          font-size: 16px
          color: #000
          box-shadow: none
          outline: 0
          -webkit-appearance: none
  .btn-pay
    display: block
    width: 70%
    margin: 20px auto 0
    font-size: 16px
    font-weight: 600
    letter-spacing: 0.2em
</style>
