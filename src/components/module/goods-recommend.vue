<template>
  <div class="goods-recommend panel">
    <div class="panel-header">
      <h4 class="title">商品推荐</h4>
      <small class="subtitle">GOODS RECOMMEND</small>
    </div>
    <div class="panel-body">
      <div class="swiper-container swiper-container-hook">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a class="link" href="#">
              <img class="img-fluid" src="~common/img/slider/g1.gif" alt>
            </a>
          </div>
          <div class="swiper-slide">
            <a class="link" href="#">
              <img class="img-fluid" src="~common/img/slider/g2.gif" alt>
            </a>
          </div>
          <div class="swiper-slide">
            <a class="link" href="#">
              <img class="img-fluid" src="~common/img/slider/g3.gif" alt>
            </a>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-hook"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'goods-recommend',
  mounted() {
    this._initSwiper()
  },
  methods: {
    _initSwiper() {
      // 初始化swiper
      this.swiper = new Swiper('.swiper-container-hook', {
        // slidesPerView: 2,
        uniqueNavElements: false,
        pagination: {
          el: '.swiper-pagination-hook',
          clickable: true
        }
      })
      // 鼠标滑过分页器时控制swiper切换
      for (
        let i = 0, len = this.swiper.pagination.bullets.length;
        i < len;
        i++
      ) {
        this.swiper.pagination.bullets[i].onmouseover = function() {
          this.click()
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.goods-recommend
  background-color: $panel-bg
  border-radius: 4px
  overflow: hidden
  &.panel
    display: flex
    flex-direction: column
    margin-bottom: $panel-gutter
    & > .panel-header
      padding: 10px 15px
      border-bottom: 1px solid $subtitle-color
      .title
        font-size: $font-size-large
        font-weight: bold
        color: $white
      .subtitle
        font-size: $font-size-small
        color: $subtitle-color
    & > .panel-body
      padding: 15px
      .swiper-container
        margin-top: 20px
        .img-fluid
          margin: 0 auto
          padding: 20px
          border: 4px solid $warning-color
          box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.2)
      .swiper-pagination
        position: relative
        margin-top: 30px
        width: 100% !important
        height: 30px
        >>>.swiper-pagination-bullet
          margin: 0 4px
        >>>.swiper-pagination-bullet-active
          background-color: $white
</style>
