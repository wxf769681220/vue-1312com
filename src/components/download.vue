<template>
  <div class="download">
    <navbar-main></navbar-main>
    <v-header></v-header>
    <div class="container p-0">
      <h2 class="h2">电脑版下载</h2>
      <div class="media">
        <img class="mr-5" src="~common/img/PC_download_img.png" width="210" height="210" alt=""/>
        <div class="media-body">
          <h4 class="fs">如出现下载问题，请加客服qq：8771055或者加玩家群：221122</h4>
          <div class="content-inline mt-5">
            <img class="mr-5" src="~common/img/HT_download.png" width="211" height="60" alt=""/>
            <img class="mr-5" src="~common/img/PC_download.png" width="211" height="60" alt=""/>
          </div>
        </div>
      </div>
      <h2 class="h2">手机版下载</h2>
      <div class="media">
        <img class="mr-5" src="~common/img/phone_download_img.png" width="210" height="210" alt=""/>
        <div class="media-body">
          <div class="content-inline">
            <img class="mr-5" src="~common/img/iPhone_download.png" width="211" height="60" alt=""/>
            <img class="mr-5" src="~common/img/Android_download.png" width="211" height="60" alt=""/>
            <span class="box">
              <img class="img-fluid" src="~common/img/1312_code.png" width="100" height="100" alt=""/>
              <p class="mt-1 text-center">扫码下载</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarMain from 'components/module/navbar-main'
import VHeader from 'components/module/v-header'
export default {
  name: 'download',
  data() {
    return {}
  },
  created() {},
  methods: {
  },
  components: {
    NavbarMain,
    VHeader
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.download
  position: relative
  background-image: url('../common/img/background.jpg')
  background-repeat: no-repeat
  background-size: 100%
  >>>.navbar-main
    background-color: $black
  .container
    position: relative
    min-height: 100vh
    background-image: url('../common/img/dlPage_bg.jpg')
    background-repeat: no-repeat
    background-size: 100%
    .h2
      padding: 0 20px
      line-height: 40px
      background-color: #b9a79a
    .fs
      font-size: 16px
      color: $error-color
    .media
      padding: 40px 50px
      & > img
        display: block
        border-radius: 4px
      .box
        padding: 10px
        background-color: rgb(255,204,50)
</style>
