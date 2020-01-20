<template>
  <div class="v-qr">
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'v-qr'
}
</script>

<style lang="stylus" scoped>
.v-qr
  position: relative
  height: 104px
  width: 104px
  background-image: url('../../common/img/1312_code.png')
  background-repeat: no-repeat
  background-size: 100% 100%
  .line
    position: absolute
    left: 0
    z-index: 2
    height: 2px
    width: 104px
    background-color: yellow
    animation: QR 3s infinite alternate
@keyframes QR
  from
    top: 0px
  to
    top: 104px
</style>
