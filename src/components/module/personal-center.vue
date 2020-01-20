<template>
  <div class="personal-center panel">
    <div class="panel-header">
      <h4 class="title">个人中心</h4>
      <small class="subtitle">PERSONAL CENTER</small>
    </div>
    <div class="panel-body">
      <!-- 用户未登录-->
      <div v-if="!loggedin">
        <Button type="warning" :long="true" @click="login">登录</Button>
        <div class="content-inline justify-content-between">
          <router-link class="link" to="/service/register">新账号注册</router-link>
          <router-link class="link" to="/service/forgetPassword">忘记密码？</router-link>
        </div>
      </div>
      <!-- 用户已登录-->
      <div v-else>
        <img class="avata" src="~common/img/avata.jpg" alt="用户头像">
        <router-link class="nick" to="/userCenter">用户昵称用户昵称</router-link>
        <div class="list-group">
          <div class="list-group-item">
            <span class="lab">游戏金币：</span>
            <span class="text">10000</span>
          </div>
          <div class="list-group-item">
            <span class="lab">游戏金豆：</span>
            <span class="text">10000</span>
          </div>
          <div class="list-group-item">
            <span class="lab">会员资质：</span>
            <span class="text">100天 / 100级</span>
          </div>
          <div class="list-group-item">
            <router-link class="link" to="/test">
              <span>修改资料</span>
            </router-link>
            <router-link class="link" to="/test">
              <span>修改秀</span>
            </router-link>
            <router-link class="link" to="/test">
              <span>游戏充值</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-footer" v-if="loggedin">上次登录：2019/9/2 17:28:16</div>
  </div>
</template>

<script>
import { Button } from 'iview'

export default {
  name: 'personal-center',
  props: {
    loggedin: {
      type: Boolean,
      default: true
    }
  },
  created() {
    console.log(this.loggedin)
  },
  methods: {
    login() {
      this.$bus.$emit('login')
    }
  },
  components: {
    Button
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.personal-center
  background-color: $panel-bg
  border-radius: 4px
  overflow: hidden
  &.panel
    display: flex
    flex-direction: column
    margin-bottom: $panel-gutter
    & > .panel-header
      padding: 10px 15px
      border-bottom: 1px solid $subtitle-color
      .title
        font-size: $font-size-large
        font-weight: bold
        color: $white
      .subtitle
        font-size: $font-size-small
        color: $subtitle-color
    & > .panel-body
      padding: 15px
      >>>.ivu-btn-warning
        display: block
        margin-top: 20px
        padding: 6px 12px
        font-size: $font-size-large
        font-weight: bold
        letter-spacing: 0.25em
      .avata
        display: block
        margin: 0 auto
        width: 80px
        height: 80px
        border-radius: 50%
        border: 2px solid $white
        box-shadow: 4px 2px 4px $panel-bg-deep
      .nick
        display: block
        margin-top: 15px
        margin-bottom: 15px
        font-size: $font-size-base
        font-weight: bold
        color: $white
        text-align: center
        &:hover
          color: $warning-color
          text-decoration: underline
      .list-group-item
        display: flex
        height: 34px
        line-height: 34px
        font-size: $font-size-small
        color: $subtitle-color
        .lab
          flex: 0 0 60px
          width: 60px
        .text
          flex: 1 1 auto
          width: auto
        .link
          display: block
          color: $subtitle-color
          &:hover
            color: $warning-color
        .link:not(:last-child)
          & > span
            padding-right: 8px
            border-right: 1px solid $subtitle-color
        .link:not(:first-child)
          & > span
            padding-left: 10px
      .list-group-item:not(:last-child)
        border-bottom: 1px solid $subtitle-color-deep
      .content-inline
        margin-top: 20px
        & > .link
          font-size: $font-size-base
          color: $subtitle-color
          &:hover
            color: $warning-color
            text-decoration: underline
    & > .panel-footer
      padding: 10px 15px
      color: $black
      background-color: $panel-bg-light
</style>
