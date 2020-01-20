<template>
  <div class="about-us">
    <navbar-main></navbar-main>
    <v-header></v-header>
    <div class="container">
      <article class="article">
        <h1 class="mb-5 text-center">关于我们</h1>
        <p>江苏弘宝网络科技有限公司（原龙游科技有限公司）成立于2009年，公司注册资金1000万元。公司坐落于江南历史文化名城——无锡。</p>
        <p>公司主要从事自主游戏开发、游戏运营、软件开发等。经过多年的自主研发以及独立运营，公司旗下PC端游戏平台（掼蛋世界）以及手机app（掼蛋世界）已取得显著成绩，现有注册用户超过100万人 ，
          最高同时在线近万人，活跃用户数达到30万人以上。国内各地掼蛋协会（俱乐部）多数入驻平台并和公司签订战略合作协议。2017年8月成立掼蛋世界联盟，国内多数掼蛋协会（俱乐部）已加入联盟。
          公司立志于打造成国内最专业的线下赛事承办、用户线上体验最好的掼蛋平台。</p>
        <p>公司自主研发线下赛智能化比赛机制，国内首家采用平板电脑比赛的模式，避免了传统比赛手动计分的繁琐和易失误；比赛选手来回换桌的不便；杜绝线下赛作弊等不利因素，保证掼蛋比赛的公平公正。</p>
        <p>公司拥有开发、运营人员100多人，并且拥有自主研发的赛事编排软件以及多支裁判队伍（具备丰富线下掼蛋活动执裁经验），目前公司承办过的赛事主要有：
          <ul>
            <li>《2015江苏省“体彩大乐透”掼蛋大奖赛》等多届“体彩杯”掼蛋大奖赛</li>
            <li>“汤沟杯”掼蛋大奖赛、</li>
            <li>《江苏省第七届全民健身运动会》快乐棋牌大赛</li>
          </ul>
        <h3 class="text-right">欢迎有合作意向的朋友联系我们。</h3>
      </article>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import NavbarMain from 'components/module/navbar-main'
import VHeader from 'components/module/v-header'
import VFooter from 'components/module/v-footer'
export default {
  name: 'about-us',
  components: {
    NavbarMain,
    VHeader,
    VFooter
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.about-us
  position relative
  min-height: 100vh
  background-image url('../common/img/background.jpg')
  background-repeat no-repeat
  background-size 100%
  & > .container
    margin-bottom: 50px
    .article
      display: block
      padding: 50px
      width: 100%
      font-size: $font-size-base
      background-color: $white
      border-radius: 6px
      p
        margin-bottom: 20px
        line-height: 24px
        text-indent: 2em
      ul
        margin-top: 20px
        padding-left: 30px
</style>
