<template>
  <div class="v-slider">
    <div class="swiper-container" id="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a class="link" href="#">
            <img class="img-fluid" src="~common/img/slider/slider_01.jpg" alt>
          </a>
        </div>
        <div class="swiper-slide">
          <a class="link" href="#">
            <img class="img-fluid" src="~common/img/slider/slider_02.jpg" alt>
          </a>
        </div>
        <div class="swiper-slide">
          <a class="link" href="#">
            <img class="img-fluid" src="~common/img/slider/slider_03.jpg" alt>
          </a>
        </div>
      </div>
    </div>
    <div class="swiper-pagination" id="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'v-slider',
  props: {
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 3000
    },
    setWrapperSize: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: true
    },
    uniqueNavElements: {
      type: Boolean,
      default: true
    },
    observer: {
      type: Boolean,
      default: true
    },
    observeSlideChildren: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    this._initSwiper()
  },
  created() {},
  methods: {
    _initSwiper() {
      this.swiper = new Swiper('#swiper-container', {
        autoplay: this.autoplay,
        loop: this.loop,
        delay: this.delay,
        setWrapperSize: this.setWrapperSize, // flexbox布局
        pagination: {
          el: '#swiper-pagination',
          clickable: this.clickable
        },
        uniqueNavElements: this.uniqueNavElements, // 设置false值使外部分页器生效
        observer: this.observer, // 监控swiper的子元素时,自动初始化swiper,不开启，可以使用update()方法更新
        observeSlideChildren: this.observeSlideChildren,
        on: {
          slideChangeTransitionStart: function() {
            // console.log('111')
          },
          slideChange: function() {
            // console.log(this.activeIndex)
          }
        }
      })
      // 鼠标滑过pagination控制swiper切换
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
.v-slider
  position: relative
  & > .swiper-pagination
    position: relative
    width: 100%
    height: 30px
    line-height: 30px
    background-color: $white
    >>>.swiper-pagination-bullet
      margin: 0 4px
      outline: 0 !important
    >>>.swiper-pagination-bullet-active
      background-color: $warning-color
</style>
