<template>
  <div class="downloadMob">
    <div class="content">
      <div class="btn btn-app-store" @click="onAppStore"></div>
      <div class="btn btn-android" @click="onAndroid"></div>
    </div>
  </div>
</template>

<script>
// import { Icon } from 'iview'
import { mapGetters } from 'vuex'

export default {
  name: 'downloadMob',
  props: {},
  data() {
    return {
      channelNum: ''
    }
  },
  computed: {
    ...mapGetters(['wxInfo'])
  },
  watch: {},
  mounted() {
  },
  created() {
    this.channelNum = this.$route.query.channelNum
    console.log(this.channelNum, this.$route.query.channelNum)
  },
  methods: {
    onAndroid() {
      switch (this.channelNum) {
        case '11':
          window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.tmgp.happyshuadapai'
          break
        case '12':
          window.location.href = 'https://appstore.huawei.com/app/C100879291'
          break
        case '13':
          window.location.href = 'http://app.mi.com/download/834210?id=com.hongbao.hlshuadapai.mi'
          break
        case '14':
          window.location.href = 'https://storedl.nearme.com.cn/apk/201907/18/de90f640156ab36fe7e0c0d6dfae96e6.apk'
          break
        case '15':
          window.location.href = 'http://appstore.vivo.com.cn/appinfo/downloadApkFile?id=2809291'
          break
        case '100':
          window.location.href = 'http://down.1312.com/mobile/100/1312sdp.apk'
          break
        default:
          window.location.href = 'https://down.1312.com/mobile/gdsj_20200115.apk'
      }
    },
    onAppStore() {
      window.location.href = 'https://itunes.apple.com/cn/app/%E5%A4%A7%E7%89%8C%E6%8E%BC%E8%9B%8B/id1060934783?l=en&mt=8'
    }
  },
  components: {
    // Icon
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.downloadMob
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 9
  background-image: url('../common/img/bg-mob.jpg')
  background-repeat: no-repeat
  background-size: 100% 100%
  .content
    position: fixed
    left: 0
    right: 0
    bottom: 150px
    z-index: 9
    .btn-app-store, .btn-android
      display: block
      width: 200px
      height: 60px
      margin: 0 auto
      background-repeat: no-repeat
      background-size: 100% 100%
    .btn-app-store
      margin-top: 20px
      background-image: url('../common/img/home_dl_APPStore.png')
    .btn-android
      margin-top: 20px
      background-image: url('../common/img/home_dl_Android.png')
</style>
