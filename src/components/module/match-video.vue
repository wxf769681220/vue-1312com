<template>
  <div class="match-video">
    <div class="panel-header">
      <Icon class="mr-2" type="logo-youtube" size="20"/>
      <span>精彩视频</span>
      <router-link class="more" to="/test">更多</router-link>
    </div>
    <div class="panel-body">
      <div class="panel-body">您的浏览器不支持 video 标签。</div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'iview'
export default {
  name: 'match-videos',
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
  components: {
    Icon
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.match-video
  position: relative
  background-color: $white
  .panel-header
    position: relative
    display: flex
    align-items: center
    padding: 10px 15px
    font-size: $font-size-large
    font-weight: bold
    color: $body-color
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
