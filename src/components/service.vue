<template>
  <div class="service">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <div class="list-group">
            <router-link class="list-group-item" tag="div" to="/service/register">账号注册</router-link>
            <router-link class="list-group-item" tag="div" to="/service/forgetPassword">忘记密码</router-link>
          </div>
        </div>
        <div class="col-10 border-left">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Icon } from 'iview'

export default {
  name: 'service',
  props: {},
  data() {
    return {
      theme: 'light'
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
  components: {
    // Icon
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.service
  padding-top: 50px
  .list-group
    display: flex
    flex-direction: column
    .list-group-item
      display: flex
      align-items: center
      justify-content: center
      height: 50px
      font-size: $font-size-large
      border-bottom: 1px solid $border-color
      &.active
        color: $warning-color
        border-bottom: 2px solid $warning-color
  .border-left
    border-left: 1px solid $border-color
</style>
