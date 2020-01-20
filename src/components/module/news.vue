<template>
  <Tabs class="v-" value="message">
    <TabPane label="新闻" name="news">
      1
      <!-- <v-list :data="articles.news"></v-list> -->
    </TabPane>
    <TabPane label="活动" name="event">
      2
      <!-- <v-list :data="articles.events"></v-list> -->
    </TabPane>
    <TabPane label="公告" name="bulletin">
      3
      <!-- <v-list :data="articles.bulletin"></v-list> -->
    </TabPane>
    <router-link class="more" to="/test">更多</router-link>
  </Tabs>
</template>

<script>
import { Tabs, TabPane } from 'iview'
// import VList from 'base/v-list'

export default {
  name: 'news',
  props: {
    articles: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    Tabs,
    TabPane
    // VList
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.message
  position: relative
  >>>.ivu-tabs
    .ivu-tabs-nav-container
      font-size: $font-size-large
      font-weight: bold
      color: $font-color-base
    .ivu-tabs-tabpane
      padding: 0 16px 16px
    .ivu-tabs-tab-active
      color: $error-color
    .ivu-tabs-ink-bar
      background-color: $error-color
    .ivu-tabs-tab
      &:hover
        color: $error-color
  .more
    position: absolute
    top: 11px
    right: 16px
    z-index: 1030
    display: block
    color: $font-base-color
    &:hover
      font-weight: bold
      color: $error-color
</style>
