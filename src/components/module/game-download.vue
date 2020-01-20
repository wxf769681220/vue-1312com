<template>
  <div class="game-download">
    <router-link class="download animate counterclockwise both" tag="div" to="/download">
      <Icon class="icon" type="md-download" size="60"/>
      <hgroup>
        <h1>下载游戏</h1>
        <h4>DOWNLOAD THE GAME</h4>
      </hgroup>
      <div class="inner"></div>
    </router-link>
    <div class="row no-gutters">
      <div class="col-6 flex">
        <Icon class="icon" type="md-person-add" size="24"/>
        <p class="fs">
          <span class="block">快速注册</span>
          <small>REGISTER</small>
        </p>
      </div>
      <div class="col-6 flex">
        <Icon class="icon" type="logo-usd" size="24"/>
        <p class="fs">
          <span class="block">充值中心</span>
          <small>TOP UP</small>
        </p>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-6 flex">
        <Icon class="icon" type="md-school" size="24"/>
        <p class="fs">
          <span class="block">新手宝典</span>
          <small>GUIDE</small>
        </p>
      </div>
      <div class="col-6 flex">
        <Icon class="icon" type="ios-briefcase" size="24"/>
        <p class="fs">
          <span class="block">游戏商城</span>
          <small>ITEMSTORE</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'iview'

export default {
  name: 'game-download',
  components: {
    Icon
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.game-download
  position: relative
  background-color: $panel-bg
  .download
    display: flex
    align-items: center
    justify-content: center
    height: 176px
    background-image: url('~common/img/home_download_bg.jpg')
    background-repeat: no-repeat
    background-size: 100% 100%
    .icon, h1, h4
      font-weight: bold
      color: $white
      text-shadow: 1px 1px 1px $black
    h1
      font-size: $font-size-large-xxxl
      letter-spacing: 0.1em
    &:hover
      cursor: pointer
  .row:not(:last-child)
    border-bottom: 1px solid $panel-bg-deep
  .flex
    padding: 0 20px
    height: 70px
    align-items: center
    &:hover
      background-color: $panel-bg-deep
      border-bottom: 1px solid $warning-color
      cursor: pointer
    .icon
      margin-right: 8px
      color: $subtitle-color
    .fs
      font-size: $font-size-large
      color: $white
      line-height: 1.2
      small
        font-size: $font-size-small
        color: $subtitle-color
  .flex:not(:last-child)
    border-right: 1px solid $panel-bg-deep
</style>
