<template>
  <div class="getWxCode"></div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'getWxCode',
  created() {
    this.fatherUid = this.$route.query.fatherUid
    this.sources = this.$route.query.sources
    this.channelNum = this.$route.query.channelNum
    this.activityID = this.$route.query.activityID

    let wx = {
      fatherUid: this.fatherUid,
      sources: this.sources,
      activityID: this.activityID,
      channelNum: this.channelNum
    }

    this.setWxInfo(wx)

    this.addParams = `?date=${new Date().getTime()}`

    if (this.fatherUid !== null && this.fatherUid !== '') {
      this.addParams += `&fatherUid=${this.fatherUid}`
    }
    if (this.sources !== null && this.sources !== '') {
      this.addParams += `&sources=${this.sources}`
    }
    if (this.channelNum !== null && this.channelNum !== '') {
      this.addParams += `&channelNum=${this.channelNum}`
    }
    if (this.activityID !== null && this.activityID !== '') {
      this.addParams += `&activityID=${this.activityID}`
    }

    if (this.addParams.length) {
      this._getCode()
    }

    this.$emit('currentPath', this.$route.path)
  },
  methods: {
    _getCode() {
      let redirectUri = encodeURIComponent('http://node.1312.com/newUser' + this.addParams)
      let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?'
      url += 'appid=wx771b199dc379218e'
      url += `&redirect_uri=${redirectUri}`
      url += '&response_type=code'
      url += '&scope=snsapi_userinfo'
      url += '&state=STATE#wechat_redirect'
      window.location.href = url
    },
    ...mapMutations({
      setWxInfo: 'SET_WX_INFO'
    })
  }
}
</script>

<style lang="stylus" scoped></style>
