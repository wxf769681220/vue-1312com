<template>
  <div class="top10">
    <router-link class="more" to="/test">更多</router-link>
    <Tabs value="1">
      <TabPane label="败家风云榜" name="1">
        <div class="row">
          <div class="col">
            <ul class="nav">
              <li class="list-item" v-for="(item,index) in topFive" :key="item.name">
                <span class="idx">{{index + 1}}、</span>
                <span class="label">
                  <span class="text-error" v-if="index === 0">超级败家王</span>
                  <span class="text-error" v-if="index === 1">豪门败家仔</span>
                  <span class="text-error" v-if="index === 2">纨绔败家仔</span>
                  <span v-if="index > 2">败家小子</span>
                </span>
                <span class="nick">{{item.name.slice(0,12)}}</span>
              </li>
            </ul>
          </div>
          <div class="col">
            <ul class="nav">
              <li class="list-item" v-for="(item,index) in lastFive" :key="item.name">
                <span class="idx">{{index + 6}}、</span>
                <span class="label">败家小子</span>
                <span class="nick">{{item.name.slice(0,12)}}</span>
              </li>
            </ul>
          </div>
        </div>
      </TabPane>
      <TabPane label="掼蛋风云榜" name="2">
        <div class="row">
          <div class="col">
            <ul class="nav">
              <li class="list-item" v-for="(item,index) in topFive" :key="item.name">
                <span class="idx">{{index + 1}}、</span>
                <span class="label">
                  <span class="text-error" v-if="index === 0">天下第一</span>
                  <span class="text-error" v-if="index === 1">傲视九州</span>
                  <span class="text-error" v-if="index === 2">威震一方</span>
                  <span v-if="index > 2">掼蛋大师</span>
                </span>
                <span class="nick">{{item.name.slice(0,12)}}</span>
              </li>
            </ul>
          </div>
          <div class="col">
            <ul class="nav">
              <li class="list-item" v-for="(item,index) in lastFive" :key="item.name">
                <span class="idx">{{index + 6}}、</span>
                <span class="label">掼蛋大师</span>
                <span class="nick">{{item.name.slice(0,12)}}</span>
              </li>
            </ul>
          </div>
        </div>
      </TabPane>
      <TabPane label="门派风云榜" name="3">
        <div class="row">
          <div class="col">
            <ul class="nav">
              <li class="list-item" v-for="(item,index) in topFive" :key="item.name">
                <span class="idx">{{index + 1}}、</span>
                <span class="label">
                  <span class="text-error" v-if="index === 0">权倾天下</span>
                  <span class="text-error" v-if="index === 1">一手遮天</span>
                  <span class="text-error" v-if="index === 2">呼风唤雨</span>
                  <span v-if="index > 2">国士无双</span>
                </span>
                <span class="nick">{{item.name.slice(0,12)}}</span>
              </li>
            </ul>
          </div>
          <div class="col">
            <ul class="nav">
              <li class="list-item" v-for="(item,index) in lastFive" :key="item.name">
                <span class="idx">{{index + 6}}、</span>
                <span class="label">国士无双</span>
                <span class="nick">{{item.name.slice(0,12)}}</span>
              </li>
            </ul>
          </div>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { Tabs, TabPane } from 'iview'

export default {
  name: 'top10',
  props: {
    top10: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    topFive() {
      let arr = []
      this.top10.forEach((item, index) => {
        if (index > 4) {
          return
        }
        arr.push(item)
      })
      return arr
    },
    lastFive() {
      let arr = []
      this.top10.forEach((item, index) => {
        if (index <= 4) {
          return
        }
        arr.push(item)
      })
      return arr
    }
  },
  components: {
    Tabs,
    TabPane
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.top10
  position: relative
  >>>.ivu-tabs
    .ivu-tabs-nav-container
      font-size: $font-size-large
      font-weight: bold
      color: $body-color
    .ivu-tabs-tabpane
      padding: 0 16px 6px
    .ivu-tabs-tab-active
      color: $error-color
    .ivu-tabs-ink-bar
      background-color: $error-color
    .ivu-tabs-tab
      &:hover
        color: $error-color
  .nav
    display: flex
    flex-direction: column
    .list-item
      margin-bottom: 10px
      line-height: 28px
      font-size: $font-size-base
      .idx
        display: inline-block
        margin-right: 8px
        min-width: 30px
        font-size: $font-size-base
        font-weight: bold
      .label
        margin-right: 16px
        font-size: $font-size-base
        font-weight: bold
      .nick
        color: $primary-color
  .text-error
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
</style>
