<template>
  <div class="match-event">
    <div class="panel-header">
      <Icon class="mr-2" type="md-clipboard" size="20"/>
      <span>比赛日历</span>
      <router-link class="more" to="/test">更多</router-link>
    </div>
    <div class="panel-body">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="item-link" to="/test">
            <img class="img-fluid" src="~common/img/banner/g_zgtk.jpg" alt="战个痛快">
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="item-link" to="/test">
            <img class="img-fluid" src="~common/img/banner/g_sdp.jpg" alt="耍大牌">
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="item-link" to="/test">
            <img class="img-fluid" src="~common/img/banner/g_tthbs.png" alt="天天红包赛">
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Icon } from 'iview'

export default {
  name: 'match-event',
  components: {
    Icon
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.match-event
  position: relative
  background-color: $white
  .panel-header
    position: relative
    display: flex
    align-items: center
    padding: 10px 15px
    font-size: $font-size-large
    font-weight: bold
    color: $font-base-color
    border-bottom: 1px solid $border-color
    .more
      position: absolute
      top: 14px
      right: 16px
      z-index: 1030
      display: block
      font-size: $font-size-small
      font-weight: 400
      color: $body-color
      &:hover
        font-weight: bold
        color: $error-color
        cursor: pointer
  .panel-body
    padding: 20px 15px
    .nav
      & > .nav-item:not(:last-child)
        margin-bottom: 10px
      .item-link
        display: block
</style>
