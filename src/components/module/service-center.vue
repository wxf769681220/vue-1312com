<template>
  <div class="service-center panel">
    <div class="panel-header">
      <h4 class="title">客服中心</h4>
      <small class="subtitle">SERVICE CENTER</small>
    </div>
    <div class="panel-body">
      <div class="list-group">
        <router-link class="list-group-item" tag="div" to="/test">
          <Icon class="mr-2" type="ios-unlock" size="24"/>账号安全
        </router-link>
        <router-link class="list-group-item" tag="div" to="/service/forgetPassword">
          <Icon class="mr-2" type="logo-twitter" size="24"/>找回密码
        </router-link>
        <router-link class="list-group-item" tag="div" to="/test">
          <Icon class="mr-2" type="ios-call" size="24"/>账号申诉
        </router-link>
        <router-link class="list-group-item" tag="div" to="/test">
          <Icon class="mr-2" type="ios-mail-open" size="24"/>意见反馈
        </router-link>
      </div>
    </div>
    <div class="panel-footer">
      <div class="list-group">
        <div class="list-group-item">
          <span>工作时间：</span>
          <span class="text-warning">AM 9:00 - PM 5:30</span>
        </div>
        <div class="list-group-item">
          <span>客服电话：</span>
          <span class="text-white">0510-85135333</span>
        </div>
        <div class="list-group-item">
          <span>交流群：</span>
          <span class="text-white">221122</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'iview'

export default {
  name: 'service-center',
  components: {
    Icon
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.service-center
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
      .list-group
        display: flex
        flex-direction: column
        .list-group-item
          display: flex
          align-items: center
          padding-left: 8px
          height: 40px
          font-size: $font-size-base
          color: $subtitle-color
          cursor: pointer
          &:hover
            color: $warning-color
            background-color: $panel-bg-deep
    & > .panel-footer
      padding: 10px 15px
      color: $black
      background-color: $panel-bg-light
      .list-group
        display: flex
        flex-direction: column
        .list-group-item
          display: flex
          align-items: center
          height: 24px
          font-size: $font-size-small
          color: $black
      .text-warning
        color: $warning-color !important
      .text-white
        color: $white !important
</style>
