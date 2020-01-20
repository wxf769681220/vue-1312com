<template>
  <div class="join-us">
    <navbar-main></navbar-main>
    <v-header></v-header>
    <div class="container">
      <div class="content-wrapper">
        <h1 class="mb-3">招聘信息</h1>
        <Table :columns="columns" :data="data"></Table>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import NavbarMain from 'components/module/navbar-main'
import VHeader from 'components/module/v-header'
import VFooter from 'components/module/v-footer'
import { Table } from 'iview'

export default {
  name: 'join-us',
  props: {},
  data() {
    return {
      columns: [
        {
          title: '职位名称',
          key: 'position'
        },
        {
          title: '招聘人数',
          key: 'count'
        },
        {
          title: '工作地点',
          key: 'address'
        },
        {
          title: '发布时间',
          key: 'date'
        }
      ],
      data: [
        {
          position: '新媒体执行运营',
          count: 2,
          address: '无锡',
          date: new Date()
        },
        {
          position: 'node.js手游服务器开发工程师',
          count: 2,
          address: '无锡',
          date: new Date()
        },
        {
          position: 'COCOS2D-js前端游戏开发工程师',
          count: 2,
          address: '无锡',
          date: new Date()
        },
        {
          position: '新媒体执行运营',
          count: 2,
          address: '无锡',
          date: new Date()
        },
        {
          position: '新媒体执行运营',
          count: 2,
          address: '无锡',
          date: new Date()
        },
        {
          position: '新媒体执行运营',
          count: 2,
          address: '无锡',
          date: new Date()
        }
      ]
    }
  },
  components: {
    NavbarMain,
    VHeader,
    VFooter,
    Table
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.join-us
  position: relative
  min-height: 100vh
  background-image: url('../common/img/background.jpg')
  background-repeat: no-repeat
  background-size: 100%
  & > .container
    margin-bottom: 50px
    .content-wrapper
      padding: 50px
      background-color: $white
      border-radius: 6px
</style>
