<template>
  <div class="index">
    <navbar-main></navbar-main>
    <v-header></v-header>
    <div class="container">
      <div class="row no-gutters">
        <div class="layout-left">
          <!-- 登录模块 -->
          <personal-center :loggedin="loggedin"></personal-center>
          <!-- 商品推荐 -->
          <goods-recommend></goods-recommend>
          <!-- 客服中心 -->
          <service-center></service-center>
        </div>
        <div class="layout-center">
          <!-- 轮播图 -->
          <v-slider :autoplay="carousel.autoplay" :loop="carousel.loop" :delay="carousel.delay" :setWrapperSize="carousel.setWrapperSize" :uniqueNavElements="carousel.uniqueNavElements"></v-slider>
          <!-- 消息文章 -->
          <div class="message-wrapper">
            <router-link class="more" to="/test">更多</router-link>
            <Tabs value="news">
              <TabPane label="新闻" name="news">
                <message :data="messages.news"></message>
              </TabPane>
              <TabPane label="活动" name="event">
                <message :data="messages.events"></message>
              </TabPane>
              <TabPane label="公告" name="bulletin">
                <message :data="messages.bulletin"></message>
              </TabPane>
            </Tabs>
          </div>
          <!-- 排行榜top10 -->
          <div class="top10-wrapper">
            <top10 :top10="top10"></top10>
          </div>
        </div>
        <div class="layout-right">
          <!-- 快捷入口 -->
          <div class="game-download-wrapper">
            <game-download></game-download>
          </div>
          <!-- 活动事件 -->
          <div class="match-event-wrapper">
            <match-event></match-event>
          </div>
          <!-- 精彩视频 -->
          <div class="match-videos-wrapper">
            <match-video></match-video>
          </div>
        </div>
      </div>
    </div>
    <!-- 页尾版权信息 -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import VSlider from 'components/base/v-slider'
import VHeader from 'components/module/v-header'
import VFooter from 'components/module/v-footer'
import NavbarMain from 'components/module/navbar-main'
import PersonalCenter from 'components/module/personal-center'
import GoodsRecommend from 'components/module/goods-recommend'
import GameDownload from 'components/module/game-download'
import ServiceCenter from 'components/module/service-center'
import Top10 from 'components/module/top10'
import MatchEvent from 'components/module/match-event'
import MatchVideo from 'components/module/match-video'
import Message from 'components/module/message'
import { Tabs, TabPane } from 'iview'
import { mapGetters } from 'vuex'

export default {
  name: 'index',
  data() {
    return {
      carousel: {
        autoplay: true,
        loop: true,
        delay: 2000,
        setWrapperSize: true,
        uniqueNavElements: false
      },
      messages: {
        news: [
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 0
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 0
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 0
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 0
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 0
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 0
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 0
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 0
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 0
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 0
          }
        ],
        events: [
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 1
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 1
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 1
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 1
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 1
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 1
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 1
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 1
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 1
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 1
          }
        ],
        bulletin: [
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 2
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 2
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 2
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 2
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 2
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 2
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 2
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 2
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 2
          },
          {
            title: '欢乐耍大牌掼蛋联赛第8场月度总决赛',
            url: '/test',
            date: '2019-09-10',
            type: 2
          }
        ]
      },
      top10: [
        {
          nick: '超级败家王',
          name: '黑桃A黑桃A黑桃A黑桃A'
        },
        {
          nick: '超级败家王',
          name: '最多显示12字符'
        },
        {
          nick: '超级败家王',
          name: 'nj胡桃3'
        },
        {
          nick: '超级败家王',
          name: 'nj胡桃4'
        },
        {
          nick: '超级败家王',
          name: 'nj胡桃5'
        },
        {
          nick: '超级败家王',
          name: '黑桃A黑桃A黑桃A黑桃A1233131'
        },
        {
          nick: '超级败家王',
          name: 'nj胡桃7'
        },
        {
          nick: '超级败家王',
          name: 'nj胡桃8'
        },
        {
          nick: '超级败家王',
          name: 'nj胡桃9'
        },
        {
          nick: '超级败家王',
          name: 'nj胡桃10'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['token']),
    loggedin() {
      return this.token ? true : false
    }
  },
  watch: {
    // token() {
    //   this.loggedin = true
    // }
  },
  mounted() {},
  created() {
    // 退出状态
    this.$bus.on('quit', () => {
      this.loggedin = false
    })
  },
  methods: {},
  components: {
    NavbarMain,
    VHeader,
    PersonalCenter,
    GoodsRecommend,
    ServiceCenter,
    VSlider,
    Tabs,
    TabPane,
    Message,
    Top10,
    GameDownload,
    MatchEvent,
    MatchVideo,
    VFooter
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.index
  position: relative
  background-image: url('../common/img/background.jpg')
  background-repeat: no-repeat
  background-size: 100%
  .container
    margin-bottom: 50px
    .layout-left
      flex: 0 0 216px
      width: 216px
    .layout-center
      flex: 0 0 640px
      width: 640px
      margin: 0 12px
      .message-wrapper
        position: relative
        margin-top: 12px
        background-color: $white
        border-radius: 4px
        overflow: hidden
        >>>.ivu-tabs
          .ivu-tabs-nav-container
            font-size: $font-size-large
            font-weight: bold
            color: $body-color
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
          color: $body-color
          &:hover
            font-weight: bold
            color: $error-color
      .top10-wrapper
        margin-top: 12px
        border-top: 1px solid $grey-1
        border-left: 1px solid $grey-1
        box-shadow: 2px 2px 2px $grey-1
        background-color: $white
        border-radius: 4px
        overflow: hidden
    .layout-right
      flex: 0 0 320px
      width: 320px
      .game-download-wrapper, .match-event-wrapper, .match-videos-wrapper
        margin-bottom: 12px
        border-radius: 4px
        overflow: hidden
      .match-event-wrapper, .match-videos-wrapper
        border-top: 1px solid $grey-1
        border-left: 1px solid $grey-1
        box-shadow: 2px 2px 2px $grey-1
</style>
