<template>
  <div class="v-header">
    <div class="container">
      <div class="content-inline justify-content-between">
        <div class="layout-left">
          <p class="mb-2 fs">合作热线：0510-85135333</p>
          <p class="content-inline mb-2">
            <img
              class="mr-2"
              src="~common/img/icon/jiangsu.png"
              width="32"
              height="32"
              alt="江苏体育频道图标"
            >
            江苏体育休闲频道《耍大牌》每晚17:50播出
          </p>
          <p class="content-inline mb-2">
            <img
              class="mr-2"
              src="~common/img/icon/huaian.png"
              width="32"
              height="32"
              alt="淮安影视娱乐频道图标"
            >
            淮安影视娱乐频道《掼蛋世界》每晚20:00播出
          </p>
          <p class="content-inline mb-2">
            <img
              class="mr-2"
              src="~common/img/icon/nantong.png"
              width="32"
              height="32"
              alt="南通影视频道图标"
            >
            南通影视频道《掼蛋世界》每22:00播出
          </p>
        </div>
        <div class="layout-right">
          <div class="content-inline">
            <qr-code class="mr-3"></qr-code>
            <div>
              <img
                class="img-fluid mb-2"
                src="~common/img/home_dl_APPStore.png"
                width="168"
                height="48"
                alt="苹果下载"
              >
              <img
                class="img-fluid"
                src="~common/img/home_dl_Android.png"
                width="168"
                height="48"
                alt="安卓下载"
              >
            </div>
            <div class="background"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QrCode from 'components/module/qr-code'

export default {
  name: 'v-header',
  components: {
    QrCode
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.v-header
  margin-top: 60px
  margin-bottom: 70px
  .layout-left
    & > p
      font-size: $font-size-large-m
      font-weight: 700
      color: yellow
      text-shadow: 0 2px 2px $black
    .fs
      font-size: $font-size-large-l
      font-weight: 700
      color: $white
      text-shadow: 0 2px 2px $black
  .layout-right
    & > .content-inline
      position: relative
      padding: 15px 20px
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4)
      border-radius: 4px
      overflow: hidden
      .background
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-image: url('../../common/img/idx_dowload_bg.png')
        background-repeat: no-repeat
        background-size: 100% 100%
        opacity: 0.2
</style>
