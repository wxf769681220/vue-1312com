<template>
  <div class="navbar-top">
    <div class="container">
      <router-link to="/index">
        <img class="brand" src="~common/img/brand.png" width="277" height="26" alt="logo">
      </router-link>
      <ul class="nav">
        <li class="nav-item">
          <div class="item-link cursor" v-if="isLogin" @click="show">
            <span>登录</span>
          </div>
          <div class="item-link cursor text-warning" v-else>
            <span>{{userName}}</span>
            <span class="quit" @click="quit">退出登录</span>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="item-link" to="/service/register">
            <span>注册</span>
          </router-link>
        </li>
        <li class="nav-item">
          <div class="item-link" @click="collect">
            <span>加入收藏</span>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="item-link" to="/safeCenter">
            <span>安全中心</span>
          </router-link>
        </li>
        <li class="nav-item">
          <Dropdown>
            <a class="item-link" href="javascript:void(0)">
              <span>
                联系我们
                <Icon type="ios-arrow-down"></Icon>
              </span>
            </a>
            <!--下拉菜单 -->
            <DropdownMenu slot="list">
              <div class="content-inline">
                <div>
                  <img
                    class="block"
                    src="~common/img/1312_weibo.jpg"
                    width="120"
                    height="120"
                    alt="1312官方微博"
                  >
                  <p class="text-center">关注官方微博</p>
                </div>
                <div>
                  <img
                    class="block"
                    src="~common/img/1312_weixin.jpg"
                    width="120"
                    height="120"
                    alt="1312微信公众号"
                  >
                  <p class="text-center">关注微信公众号</p>
                </div>
                <div>
                  <Icon type="ios-call" size="24" color="#333"/>客户服务电话
                  <span>0510-85135333</span>
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li class="nav-item">
          <router-link class="item-link" to="/index">
            <span>官网首页</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="item-link" to="/newUser">
            <span>推广</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Modal模块将自动被放置在body标签下 -->
    <Modal
      width="372"
      v-model="login"
      :footer-hide="true"
      @on-cancel="hide"
    >
      <h2 class="text-center" slot="header">用户登录</h2>
      <login ref="login" @hideLogin="hide"></login>
    </Modal>

    <!-- 加入收藏 -->
    <Modal width="400" v-model="tipTools" :footer-hide="true">
      <h2>加入收藏失败，请使用<span class="text-error">Ctrl+D</span>进行添加!</h2>
    </Modal>
  </div>
</template>

<script>
import Login from 'components/body/login'
import { Icon, Dropdown, DropdownMenu, Modal } from 'iview'
import { mapGetters } from 'vuex'

export default {
  name: 'navbar-top',
  data() {
    return {
      login: false,
      isLogin: true,
      tipTools: false
    }
  },
  computed: {
    ...mapGetters([
      'userName',
      'token'
    ])
  },
  watch: {
    token() {
      this.isLogin = false
    }
  },
  mounted() {},
  created() {
    if (this.token) {
      this.isLogin = false
    }
    this.$bus.on('login', () => {
      this.show()
      this.$nextTick(() => {
        this.$refs.login.refresh()
      })
    })
  },
  methods: {
    collect(title, url) {
      try {
        window.external.addFavorite(url, title)
      } catch (e) {
        try {
          window.sidebar.addPanel(title, url, '')
        } catch (e) {
          this.tipTools = true
        }
      }
    },
    quit() {
      this.isLogin = true
      this.$bus.emit('quit')
    },
    show() {
      this.login = true
    },
    hide() {
      this.login = false
      this.$bus.emit('refreshValidCode')
    }
  },
  components: {
    Icon,
    Dropdown,
    DropdownMenu,
    Modal,
    Login
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.navbar-top
  background-color: $white
  border-bottom: 1px solid $border-color
  .container
    display: flex
    justify-content: space-between
    align-items: center
    .brand
      margin-top: 2px
    .nav-item:not(:last-child)
      .item-link
        & > span
          border-right: 1px solid $divider-color
    .nav-item
      .item-link
        display: block
        height: 36px
        line-height: 36px
        color: $body-color
        &.active
          color: $link-active-color
        &:hover
          color: $link-hover-color
        & > span
          padding: 0 10px
      .content-inline
        padding: 15px
        & > div
          padding: 0 15px
        & > div:not(:last-child)
          border-right: 1px solid $border-color
  .cursor
    cursor: pointer
</style>
