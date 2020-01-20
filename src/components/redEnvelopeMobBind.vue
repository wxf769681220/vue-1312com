<template>
  <div class="redEnvelopeMobBind">
    <div class="redEnvelopeMobBind-header">
      <div class="content">
        <p>手机绑定</p>
      </div>
    </div>

    <div class="redEnvelopeMobBind-body">
      <div class="content">
        <p class="py-5" v-if="mobile">当前绑定的手机号为：{{mobile}}</p>
        <p class="py-5" v-else>您尚未绑定手机号!</p>
        <Button class="btn-envelope" type="warning" size="large" @click="showModal" v-text="mobile ? '换绑手机号' : '绑定手机号'"></Button>
      </div>
    </div>

    <div class="redEnvelopeMobBind-footer">
      <div class="content">
        <div class="desc-wrap">
          <p>请确认是游戏中使用的手机号码，否则影响到红包的领取，弘宝网络概不负责。</p>
        </div>
      </div>
    </div>

    <Modal class="modalRedEnvelopeMobBind" :mask-closable="false" v-model="modalRedEnvelopeMobBind" width="320px" :title="mobile ? '换绑手机号' : '绑定手机号'" class-name="vertical-center-modal" footer-hide>
      <ValidationObserver class="form" tag="form" ref="observer" v-slot="{ valid }">
        <validation-provider tag="div" rules="required|numeric|length:11" v-slot="{ errors }">
          <div class="content-inline">
            <Input v-model="newMobile" placeholder="手机号" />
          </div>
        </validation-provider>
        <validation-provider class="mt-4" tag="div" rules="required|match" v-slot="{ errors }">
          <div class="content-inline">
            <Input v-model="mobileVerify" placeholder="验证码" />
            <Button class="btn-verifyCode ml-3" type="warning" size="large" :disabled="visBtn" @click="onGetVerifyCode">{{msg}}</Button>
          </div>
          <div class="mt-3 text-error">{{errors[0]}}</div>
        </validation-provider>
        <Button class="mt-2" type="primary" size="large" @click="onChangeMobConfirm" :disabled="!valid" style="width: 100%; margin: 0 auto; font-szie: 16px">确定</Button>
      </ValidationObserver>
    </Modal>
  </div>
</template>

<script>
import { Button, Modal, Input } from 'iview'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, numeric, length } from 'vee-validate/dist/rules'
import { checkBindPhone, getAccessToken, bindPhone, sendVerifyCode } from 'api'

export default {
  name: 'redEnvelopeMobBind',
  props: {},
  data() {
    return {
      modalRedEnvelopeMobBind: false,
      mobile: '',
      newMobile: '',
      noPhone: false,
      errors: false,
      mobileVerify: '',
      verifyCode: '',
      getCode: '',
      sameMob: false,
      text: 0 // 倒计时描述
    }
  },
  computed: {
    msg() {
      return this.text ? `${this.text}s后可重新获取` : '获取验证码'
    },
    visBtn() {
      return Boolean(this.text)
    }
  },
  watch: {
  },
  mounted() {},
  created() {
    this.code = this.$route.query.code
    if (this.code) {
      this._getAccessToken()
    } else {
      console.log('无法获取code!')
    }
    this.checkInput()
  },
  methods: {
    _getAccessToken() {
      getAccessToken({
        code: this.code
      }).then(res => {
        if (res.code === 200) {
          this.openid = res.openid
          this._checkBindPhone()
        }
      })
    },
    _checkBindPhone() {
      checkBindPhone({
        openid: this.openid
      }).then(res => {
        if (res.code === 200) {
          let isPhone = res.hasOwnProperty('phone')
          if (isPhone) {
            this.mobile = res.phone
          } else {
            this.mobile = ''
          }
        } else {
          alert('检测手机号是否已经绑定时出错!')
        }
      })
    },
    onChangeMobConfirm() {
      if (!this.newMobile) {
        alert('请输入手机号!')
        return
      }
      if (this.mobile === this.newMobile) {
        this.sameMob = true
        this.$Message.success('当前手机号已被绑定,请勿重复绑定!')
        this.onChangeMobCancel()
        return
      }
      bindPhone({
        openid: this.openid,
        phone: this.newMobile
      }).then(res => {
        if (res.code === 200) {
          alert('手机绑定成功!')
          this.onChangeMobCancel()
          this._checkBindPhone()
        } else {
          alert('手机绑定失败!')
          this.onChangeMobCancel()
        }
      })
    },
    onChangeMobCancel() {
      this.verifyCode = ''
      this.newMobile = ''
      this.hide()
    },
    onGetVerifyCode() {
      if (!this.newMobile) {
        alert('请输入手机号!')
        return
      }
      this.getCode = this._createdCode()
      sendVerifyCode({
        code: this.getCode,
        phone: this.newMobile
      }).then(res => {
        if (res.code === 200) {
          alert('验证码发送成功!')
          this._countDown()
          this.verifyCode = this.getCode
        } else {
          alert('验证码发送失败!请检查手机号是否有效？')
        }
      })
    },
    _createdCode() {
      let chars = '0123456789'
      let res1 = chars.charAt(Math.floor(Math.random() * chars.length))
      let res2 = chars.charAt(Math.floor(Math.random() * chars.length))
      let res3 = chars.charAt(Math.floor(Math.random() * chars.length))
      let res4 = chars.charAt(Math.floor(Math.random() * chars.length))
      let code = res1 + res2 + res3 + res4
      return code
    },
    _countDown() {
      this.times = 30 // 初始化30s倒计时
      this.timer = setInterval(() => {
        if (this.times !== 0) {
          this.times--
        } else {
          clearInterval(this.timer)
        }
        this.text = this.times
        console.log(this.text)
      }, 1000)
    },
    checkInput() {
      extend('required', {
        ...required,
        message: '不能为空!'
      })
      extend('numeric', {
        ...numeric,
        message: '请输入有效的数字值!'
      })
      extend('length', {
        ...length,
        message: '请输入有效的11位手机号码!'
      })
      extend('match', {
        validate: value => {
          return Number(value) === Number(this.verifyCode)
        },
        message: '无效的验证码!'
      })
    },
    hide() {
      this.modalRedEnvelopeMobBind = false
    },
    showModal() {
      this.modalRedEnvelopeMobBind = true
    }
  },
  beforedestroy() {
    // 清除计时器
    this.timer = null
  },
  components: {
    Button,
    Modal,
    Input,
    ValidationProvider,
    ValidationObserver
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.redEnvelopeMobBind
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 9
  overflow-y: scroll
  .redEnvelopeMobBind-header
    background-color: rgb(228, 60, 60)
    .content
      padding: 15px 0
      font-size: 16px
      color: white
      text-align: center
  .redEnvelopeMobBind-body
    height: calc(100vh - 54px)
    background-image: url('..//common/img/redenvelope_bg.jpg')
    background-repeat: no-repeat
    background-size: 100% 100%
    .content
      padding: 0 20px
      font-size: 16px
      color: white
      text-align: center
  .redEnvelopeMobBind-footer
    position: fixed
    left: 0
    bottom: 30px
    .desc-wrap
      padding: 20px
      margin: 0 auto
      width: 80%
      font-size: 14px
      color: rgb(180, 73, 10)
      background-color: rgb(252, 239, 197)
      border-radius: 4px
  .btn-envelope
    font-size: 16px
    font-weight: 600
</style>
