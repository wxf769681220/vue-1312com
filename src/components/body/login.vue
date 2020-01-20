<template>
  <ValidationObserver tag="form" class="login" v-slot="{ valid }">
    <!-- 输入用户名 -->
    <validation-provider
      tag="div"
      class="form-group"
      rules="required"
      v-slot="{ errors }"
    >
      <div class="input-group">
        <input class="input-control" type="text" placeholder="用户名" v-model="account.userName">
      </div>
    </validation-provider>

    <!-- 输入密码 -->
    <validation-provider
      tag="div"
      class="form-group"
      rules="required"
      v-slot="{ errors }">
      <div class="input-group"
    >
        <input class="input-control" type="password" placeholder="密码" v-model="account.password">
      </div>
    </validation-provider>

    <!-- 验证码校验 -->
    <validation-provider
      class="form-group content-inline"
      tag="div"
      rules="required|excluded"
      v-slot="{ errors }"
    >
      <div class="input-group">
        <input class="input-control" type="text" placeholder="验证码" v-model="account.code">
        <icon-error v-show="account.code" :errors="errors"></icon-error>
      </div>
      <valid-code :value.sync="validCode"></valid-code>
    </validation-provider>

    <div class="extra">
      <router-link to="/service/register" @click.native="close">没有账号？立即注册</router-link>
      <router-link to="/service/forgetPassword" @click.native="close">忘记密码？</router-link>
    </div>

    <Button
      class="btn-login"
      type="success"
      :long="true"
      :disabled="!valid"
      @click.stop.prevent="toLogin"
    >
      <span v-if="!loading">登录</span>
      <span v-else>登录中...</span>
    </Button>

    <p class="text-error" v-show="errorMsg" v-text="errorMsg"></p>
  </ValidationObserver>
</template>

<script>
import IconError from 'components/module/icon-error'
import ValidCode from 'components/base/valid-code'
import { Button } from 'iview'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import { userLogin } from 'api/index'
import { mapMutations } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      loading: false,
      validCode: '',
      code: '',
      account: {
        userName: '',
        password: '',
        code: ''
      },
      errorMsg: ''
    }
  },
  watch: {
    // 路由发生变化时重置input
    $route() {
      this.resetInput()
    },
    // 切换验证码时重置input
    validCode() {
      this.account.code = ''
    }
  },
  created() {
    this._inputCheck()
  },
  methods: {
    toLogin() {
      userLogin({
        userName: this.account.userName,
        password: this.account.password
      }).then(res => {
        console.log(res)
        if (res.code === 200) {
          // 记录值
          this.setToken(res.msg.token)
          this.setUserName(this.account.userName)
          // 重置状态
          this.errorMsg = ''
          this.resetInput()
          this.close()
        } else if (res.code === 11108) {
          this.errorMsg = '用户不存在!'
          this.account.userName = ''
        } else if (res.code === 11104) {
          this.errorMsg = '密码错误!'
          this.account.password = ''
        } else {
          this.errorMsg = '未知错误!'
          this.resetInput()
        }
      })
    },
    ...mapMutations({
      setToken: 'SET_TOKEN',
      setUserName: 'SET_USER_NAME'
    }),
    close() {
      this.$emit('hideLogin')
    },
    resetInput() {
      this.account.userName = ''
      this.account.password = ''
      this.account.code = ''
    },
    refresh() {
      this._inputCheck()
    },
    _inputCheck() {
      extend('required', {
        ...required,
        message: '必须的'
      })
      extend('excluded', {
        validate: value => value.toLowerCase() === this.validCode.toLowerCase(),
        message: '无效的验证码!'
      })
    }
  },
  components: {
    Button,
    IconError,
    ValidationObserver,
    ValidationProvider,
    ValidCode
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.login
  display: block
  padding: 15px
  width: 340px
  .form-group
    margin-bottom: 15px
  .input-group
    position: relative
  .input-control
    padding: 6px 34px 6px 12px
    min-height: 40px
    line-height: 24px
    font-size: $font-size-base
    border: 1px solid $border-color
    &:focus
      border-color: #80bdff
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25)
    &::placeholder
      font-size: $font-size-base
      color: $input-placeholder-color
  .content-inline
    .input-group
      flex: 1 1 auto
    .check-code
      margin-left: 8px
      flex: 0 0 98px
      width: 98px
      height: 40px
      background-image: url('~common/img/check_code.gif')
      background-repeat: no-repeat
      background-size: 100% 100%
  .extra
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    line-height: 40px
  .btn-login
    margin-bottom: 10px
    font-size: $font-size-large
    font-weight: 600
    letter-spacing: 0.2em
</style>
