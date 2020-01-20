<template>
  <div class="sports">
    <navbar-main></navbar-main>
    <v-header></v-header>
    <div class="container">
      <div class="content-wrapper">
        <h2 class="mb-3">会员活动</h2>
        <div class="card">
          <div class="card-header" @mouseenter="showInfo" @mouseleave="hideInfo">
            <div v-show="isBackground">
              <div class="text">
                <p class="text-center">活动时间：{{new Date()}}</p>
                <p class="text-center">奖品：Jeep汽车一辆</p>
              </div>
              <div class="background"></div>
            </div>
          </div>
          <div class="card-body">
            <a class="block mt-2" href="#">月月赢Jeep</a>
            <div class="content-inline">
              <p>
                <Icon class="mr-1" type="ios-people" size="24" color="red"/>
                <span>21000</span>
              </p>
              <Button type="primary">进入</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import NavbarMain from 'components/module/navbar-main'
import VHeader from 'components/module/v-header'
import VFooter from 'components/module/v-footer'
import { Icon, Button } from 'iview'

export default {
  name: 'sports',
  props: {},
  data() {
    return {
      isBackground: false
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    showInfo() {
      this.isBackground = true
    },
    hideInfo() {
      this.isBackground = false
    }
  },
  components: {
    NavbarMain,
    VHeader,
    VFooter,
    Button,
    Icon
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.sports
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
      .card
        display: inline-block
        padding: 10px
        width: 280px
        border: 1px solid $border-color-base
        border-radius:  6px
        .card-header
          position: relative
          height: 104px
          border: 1px solid #000
          // background-image: url(../common/img/e_bmb.jpg)
          .text
            position: absolute
            top: 50%
            left: 0
            width: 100%
            height: 42px
            font-size: $font-size-base
            color: $white
            transform: translate3d(0,-50%,0)
            z-index: 2
          .background
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            background-color: rgba(0,0,0,0.7)
            z-index: 1
        .card-body
          font-size: $font-size-base
          .content-inline
            display: flex
            align-items: center
            justify-content: space-between
</style>
