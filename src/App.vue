<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <navbar-top v-if="hideNavbar"></navbar-top>

    <!-- 顶级路由渲染出口-->
    <router-view @currentPath="currentPath"></router-view>
  </div>
</template>

<script>
import NavbarTop from 'components/module/navbar-top'

export default {
  name: 'app',
  data() {
    return {
      hideNavbar: true
    }
  },
  watch: {
    '$route.path'(val) {
      this.currentPath(val)
    }
  },
  created() {
    console.log(this.$route)
    this.currentPath()
  },
  mounted() {
    // 若页面重载则state存入sessionStorage
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    currentPath(val) {
      console.log(val)
      if (val.indexOf('/redEnvelopeGet') > -1 || val.indexOf('/redEnvelopeMobBind') > -1 || val.indexOf('/wxGamePay') > -1 || val.indexOf('/getCode') > -1) {
        this.hideNavbar = false
      }
    },
    saveState() {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  },
  components: {
    NavbarTop
  }
}
</script>

<style lang="stylus" scoped>
#app
  min-height: 100vh
</style>
