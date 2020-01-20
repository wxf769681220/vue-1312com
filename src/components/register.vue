<template>
  <div class="register">
    <h2 class="text-warning">注册掼蛋游戏，就送1000豆哦!!!</h2>
    <Divider/>
    <!-- 注册表单 -->
    <form class="form" v-if="isForm">
      <ValidationObserver v-slot="{ valid }">
        <!-- 设置用户名 -->
        <validation-provider
          class="form-group"
          name="userName"
          tag="div"
          rules="required|min:4|max:14"
          v-slot="{ errors }"
        >
          <div class="input-group">
            <div class="input-wrap">
              <input
                class="input-control"
                type="text"
                placeholder="设置用户名"
                v-model="account.userName"
              >
              <icon-error v-show="account.userName" :errors="errors"></icon-error>
            </div>
            <div class="error-tip" v-show="errors.length">{{ errors[0] }}</div>
          </div>
        </validation-provider>

        <!-- 设置密码 -->
        <validation-provider
          class="form-group"
          name="password"
          tag="div"
          rules="required|min:6|max:15"
          v-slot="{ errors }"
        >
          <div class="input-group">
            <div class="input-wrap">
              <input
                class="input-control"
                type="password"
                placeholder="设置密码"
                v-model="account.password"
                @input="syncVuex($event.target.value)"
              >
              <icon-error v-show="account.password" :errors="errors"></icon-error>
            </div>
            <div class="error-tip" v-show="errors.length">{{ errors[0] }}</div>
          </div>
        </validation-provider>

        <!-- 密码强度 -->
        <div class="password-strong">
          <span class="lab">密码强度：</span>
          <div class="strong">
            <div class="item bg-error" v-text="passwordStrong === 1 ? '低' : ''"></div>
            <div class="item bg-warning" v-text="passwordStrong === 2 ? '中' : ''"></div>
            <div class="item bg-success" v-text="passwordStrong === 3 ? '高' : ''"></div>
          </div>
        </div>

        <!-- 再次确认密码 -->
        <validation-provider
          class="form-group"
          name="confirmPassword"
          tag="div"
          rules="required|match:password"
          v-slot="{ errors }"
        >
          <div class="input-group">
            <div class="input-wrap">
              <input
                class="input-control"
                type="password"
                placeholder="再次输入密码"
                v-model="account.confirmPassword"
              >
              <icon-error v-show="account.confirmPassword" :errors="errors"></icon-error>
            </div>
            <div class="error-tip" v-show="errors.length">{{ errors[0] }}</div>
          </div>
        </validation-provider>

        <!-- 设置邮箱 -->
        <validation-provider class="form-group" tag="div" rules="email" v-slot="{ errors }">
          <div class="input-group">
            <div class="input-wrap">
              <input class="input-control" type="email" placeholder="设置邮箱" v-model="account.email">
              <icon-error v-show="account.email" :errors="errors"></icon-error>
            </div>
            <div class="error-tip" v-show="errors.length">{{ errors[0] }}</div>
          </div>
        </validation-provider>

        <!-- 验证码校验 -->
        <validation-provider
          class="form-group"
          tag="div"
          rules="required|excluded"
          v-slot="{ errors }"
        >
          <div class="input-group">
            <div class="input-wrap">
              <input
                class="input-control mr-2"
                type="text"
                placeholder="验证码"
                v-model="account.checkCode"
              >
              <icon-error class="pos" v-show="account.checkCode" :errors="errors"></icon-error>
              <valid-code :value.sync="validCode"></valid-code>
            </div>
            <div class="error-tip" v-show="errors.length">{{ errors[0] }}</div>
          </div>
        </validation-provider>

        <!-- 服务条款 -->
        <validation-provider class="extra" tag="div" rules="required" v-slot="{ errors }">
          <label class="content-inline" for="checkbox">
            <input id="checkbox" type="checkbox" v-model="account.agree">
            <span class="ml-1">我已经阅读并同意</span>
          </label>
          <span class="terms" @click="modalServiceTerms = true">《掼蛋游戏用户服务条款》</span>
        </validation-provider>

        <Button
          class="btn-register"
          type="success"
          :long="true"
          :loading="loading1"
          :disabled="!valid || !account.agree"
          @click.stop.prevent="userRegister"
        >
          <span v-if="!loading1">立即注册</span>
          <span v-else>注册中...请稍后</span>
        </Button>
      </ValidationObserver>
    </form>

    <!-- 信息完善表单 -->
    <form class="form" v-else>
      <ValidationObserver v-slot="{ valid }">
        <!-- 真实姓名 -->
        <validation-provider
          class="form-group"
          tag="div"
          rules="required|min:2|max:4"
          v-slot="{ errors }"
        >
          <div class="input-group">
            <div class="input-wrap">
              <input
                class="input-control"
                type="text"
                placeholder="真实姓名"
                v-model="account.realName"
              >
              <icon-error v-show="account.realName" :errors="errors"></icon-error>
            </div>
            <div class="error-tip" v-show="errors.length">{{ errors[0] }}</div>
          </div>
        </validation-provider>

        <!-- 身份证号 -->
        <validation-provider
          class="form-group"
          tag="div"
          rules="required|length:18"
          v-slot="{ errors }"
        >
          <div class="input-group">
            <div class="input-wrap">
              <input class="input-control" type="text" placeholder="身份证号" v-model="account.IDCard">
              <icon-error v-show="account.IDCard" :errors="errors"></icon-error>
            </div>
            <div class="error-tip" v-show="errors.length">{{ errors[0] }}</div>
          </div>
        </validation-provider>

        <!-- 推荐人ID -->
        <validation-provider class="form-group" tag="div" rules="min:4|max:18" v-slot="{ errors }">
          <div class="input-group">
            <div class="input-wrap">
              <input
                class="input-control"
                type="text"
                placeholder="推荐人ID"
                v-model="account.recommenderID"
              >
              <icon-error v-show="account.recommenderID" :errors="errors"></icon-error>
            </div>
            <div class="error-tip" v-show="errors.length">{{ errors[0] }}</div>
          </div>
        </validation-provider>

        <Button
          class="btn-perfect"
          type="success"
          :long="true"
          :loading="loading2"
          :disabled="!valid"
          @click.stop.prevent="perfectInfo"
        >
          <span v-if="!loading2">确认并提交信息</span>
          <span v-else>提交中...</span>
        </Button>
      </ValidationObserver>
    </form>

    <!-- 服务条款内容 -->
    <Modal class="modal-service-terms" width="800" v-model="modalServiceTerms">
      <h1 class="header" slot="header">《掼蛋游戏用户服务条款》</h1>
      <service-terms></service-terms>
      <Button type="primary" slot="footer" @click="modalServiceTerms = false">关闭</Button>
    </Modal>
  </div>
</template>

<script>
import { Button, Modal, Divider } from 'iview'
import IconError from 'components/module/icon-error'
import ServiceTerms from 'components/module/service-terms'
import ValidCode from 'components/base/valid-code'

// ES6+ Add a rule.
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email, max, min, length } from 'vee-validate/dist/rules'
import ZHCN from 'vee-validate/dist/locale/zh_CN'

// api
import { userRegister } from 'api/index'

export default {
  name: 'register',
  data() {
    return {
      account: {
        userName: '',
        password: '',
        confirmPassword: '',
        email: '',
        checkCode: '',
        agree: false,
        realName: '',
        IDCard: '',
        recommenderID: ''
      },
      validCode: '',
      passwordStrong: 0,
      isForm: true,
      modalServiceTerms: false,
      loading1: false,
      loading2: false
    }
  },
  watch: {
    validCode() {
      this.account.checkCode = ''
    }
  },
  created() {
    // 输入验证
    this._inputCheck()

    // 若在注册页面打开登录窗口时, 则应在关闭登录窗口时刷新验证码机制
    this.$bus.on('refreshValidCode', () => {
      extend('excluded', {
        validate: value => value.toLowerCase() === this.validCode.toLowerCase(),
        message: '无效的验证码!'
      })
    })
  },
  methods: {
    syncVuex(value) {
      console.log(value)
      console.log(value.length)
      // 1.根据字符长度判断密码强度
      if (value.length === 0) {
        this.passwordStrong = 0
      }

      if (0 < value.length < 10) {
        this.passwordStrong = 1
      }

      if (value.length >= 10 && value.length < 15) {
        this.passwordStrong = 2
      }

      if (value.length >= 15) {
        this.passwordStrong = 3
      }
      // 2.根据字符串类别密码强度
    },
    userRegister() {
      this.loading1 = true
      userRegister({
        userName: this.account.userName,
        password: this.account.password
      }).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.loading1 = false
          this.isForm = false
        }
      })
    },
    perfectInfo() {
      this.loading2 = true
      this.isForm = true
    },
    _inputCheck() {
      extend('required', {
        ...required,
        message: '必填项不能为空!'
      })
      extend('max', {
        ...max,
        message: ZHCN.messages['max']
      })
      extend('min', {
        ...min,
        message: ZHCN.messages['min']
      })
      extend('email', {
        ...email,
        message: '无效的邮箱格式!'
      })
      extend('length', {
        ...length,
        message: ZHCN.messages['length']
      })
      extend('match', {
        params: [{ name: 'value1', isTarget: true }],
        validate: (value, { value1 }) => value === value1,
        message: '两次输入的密码不一致!'
      })
      extend('excluded', {
        validate: value => value.toLowerCase() === this.validCode.toLowerCase(),
        message: '无效的验证码!'
      })
    }
  },
  components: {
    Button,
    Modal,
    Divider,
    IconError,
    ServiceTerms,
    ValidationObserver,
    ValidationProvider,
    ValidCode
  },
  beforedestroy() {
    this.$bus.off('refreshValidCode')
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.register
  padding-left: 50px
  .form
    display: block
    .form-group
      margin-bottom: 15px
    .input-group
      display: flex
      align-items: center
      .input-wrap
        position: relative
        display: flex
        flex: 0 0 340px
        .input-control
          flex: 1 1 auto
      .error-tip
        flex: 1 1 auto
        margin-left: 15px
        color: $error-color
      .pos
        right: 114px
    .input-control
      padding: 6px 34px 6px 12px
      min-height: 40px
      line-height: 24px
      font-size: $font-size-base
      border: 1px solid $border-color-base
      &:focus
        border-color: #80bdff
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25)
      &::placeholder
        font-size: $font-size-base
        color: $input-placeholder-color
    .extra
      position: relative
      display: flex
      align-items: center
      justify-content: space-between
      width: 340px
      line-height: 42px
      .terms
        color: $primary-color
        cursor: pointer
    .password-strong
      display: flex
      align-items: center
      margin-bottom: 15px
      width: 340px
      height: 35px
      .lab
        flex: 0 0 80px
        height: 100%
        line-height: 35px
        font-size: $font-size-base
        font-weight: 700
      .strong
        display: flex
        flex: 1 1 auto
        height: 100%
        .item
          flex: 1
          font-size: $font-size-base
          color: $white
          font-weight: 700
          text-align: center
          line-height: 35px
  .btn-register, .btn-perfect
    display: block
    margin-bottom: 10px
    width: 340px
    font-size: $font-size-large
    font-weight: 600
    letter-spacing: 0.2em
>>>.ivu-modal
  .ivu-modal-header
    text-align: center
</style>
