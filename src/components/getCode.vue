<template>
  <div class="getCode"></div>
</template>

<script>
export default {
  name: 'getCode',
  created() {
    this.$emit('currentPath', this.$route.path)
    this._getCode()
  },
  methods: {
    _getCode() {
      let redirectUri = encodeURIComponent('http://node.1312.com/wxGamePay/')
      let wechatRedirect = encodeURIComponent('#wechat_redirect')
      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx771b199dc379218e&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_base&state=123${wechatRedirect}`
      window.location.href = url
    }
  }
}
</script>

<style lang="stylus" scoped></style>
