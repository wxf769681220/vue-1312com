<template>
  <div class="newUser">
    <div class="content" v-if="unionid">
      <ValidationObserver class="form" tag="form" ref="observer" v-slot="{ valid }">

        <validation-provider tag="div" rules="required|numeric|length:11" v-slot="{ errors }">
          <div class="content-inline">
            <Input v-model="newMobile" size="large" placeholder="请输入您常用的手机号"/>
          </div>
        </validation-provider>

        <validation-provider class="mt-4" tag="div" rules="required|match" v-slot="{ errors }">
          <div class="content-inline">
            <Input v-model="mobileVerify" size="large" placeholder="验证码" />
            <Button class="btn-verifyCode ml-3" type="warning" size="large" :disabled="visBtn" @click="onGetVerifyCode">{{msg}}</Button>
          </div>
          <div class="mt-3 text-error">{{errors[0]}}</div>
        </validation-provider>

        <validation-provider class="mt-4" tag="div" rules="required" v-slot="{ errors }">
          <div class="content-inline">
            <Input v-model="pwd" size="large" type="password" placeholder="密码"/>
          </div>
        </validation-provider>

        <Button class="btn-confirm mt-2" type="primary" size="large" @click="onRegister" :disabled="!valid">确定</Button>
      </ValidationObserver>
    </div>

    <!-- 注册成功 -->
    <div class="register-success" v-if="isRegisterSuccess">
      <div class="content-layout">
        <button class="btn-download bg-warning" @click="onPath">游戏下载</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Input } from 'iview'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, numeric, length } from 'vee-validate/dist/rules'
import { sendVerifyCode, checkUnionId, createWxUser } from 'api'
import { mapGetters } from 'vuex'

export default {
  name: 'newUser',
  props: {},
  data() {
    return {
      newMobile: '',
      pwd: '',
      text: 0,
      mobileVerify: '',
      isRegisterSuccess: false,
      unionid: '',
      headimgurl: '',
      nickName: '',
      sex: 1
    }
  },
  computed: {
    ...mapGetters(['wxInfo']),
    msg() {
      return this.text ? `${this.text}s后可重新获取` : '获取验证码'
    },
    visBtn() {
      return Boolean(this.text)
    }
  },
  watch: {},
  mounted() {},
  created() {
    this._checkInput()
    this.code = this.$route.query.code
    if (this.code) {
      this._checkUnionId()
    } else {
      console.log('无法获取code!');
    }
  },
  methods: {
    onRegister() {
      createWxUser({
        unionid: this.unionid,
        mobile: this.newMobile,
        faceID: this.headimgurl,
        gender: this.sex,
        nickName: this.nickName,
        fatherUid: this.wxInfo.fatherUid,
        sources: this.wxInfo.sources,
        activityID: this.wxInfo.activityID,
        pwd: this.pwd
      }).then(res => {
        if (res.code === 200) {
          alert('注册成功!')
          this.isRegisterSuccess = true
        } else if (res.code === 33100) {
          alert('该微信账号已注册过账号,请直接在游戏登录界面点击微信登录游戏!')
        } else if (res.code === 33101) {
          alert('该手机号已绑定过账号,请直接在游戏登录界面输入手机号登录游戏!')
        } else if (res.code === 33103) {
          alert('未找到推荐人!')
        } else {
          alert('未知原因导致注册失败!')
        }
      })
    },
    _checkUnionId() {
      checkUnionId({
        code: this.code
      }).then(res => {
        if (res.code === 200) {
          this.unionid = res.unionid
          this.headimgurl = res.headimgurl
          this.nickName = res.nickName
          this.sex = res.sex
        } else if (res.code === 33100) {
          alert('该微信账号已注册过账号,请直接在游戏登录界面点击微信登录游戏!')
          this.isRegisterSuccess = true
        } else if (res.code === 33100) {
          alert('系统检测获取accessToken时失败!')
        } else {
          alert('未知原因导致获取unionid时失败!')
        }
      })
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
    onPath() {
      this.$router.push({
        path: '/downloadMob',
        query: {
          channelNum: this.wxInfo.channelNum
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
      this.times = 30
      setInterval(() => {
        if (this.times !== 0) {
          this.times--
        } else {
          clearInterval(this.timer)
        }
        this.text = this.times
      }, 1000)
    },
    _checkInput() {
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
    }
  },
  components: {
    Button,
    Input,
    ValidationProvider,
    ValidationObserver
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.newUser
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 9
  background-image: url('../common/img/mobile-bg.png')
  background-repeat: no-repeat
  background-size: 100% 100%
  overflow-y: scroll
  .content
    margin: 200px auto 0
    padding: 20px
    width: 80%
    border: 1px solid #000
  .register-success
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 10
    background-image: url('../common/img/zccg.png')
    background-repeat: no-repeat
    background-size: 100% 100%
    overflow-y: scroll
    .content-layout
      width: 100%
      padding: 20px
      position: absolute
      top: 60%
      left: 50%
      transform: translate3d(-50%, -60%, 0)
      z-index: 11
  .btn-download
    display: block
    margin: 0 auto
    width: 50%
    height: 60px
    padding: 6px 12px
    border-radius: 4px
    box-shadow: 1px 1px 1px #000
    outline: 0
    color: white
    font-size: $font-size-large-xl
    font-weight: 600
  .btn-confirm
    display: block
    margin: 0 auto
    width: 100%
</style>
