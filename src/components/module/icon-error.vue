<template>
  <div class="icon-error">
    <Icon class="icon" type="ios-alert" size="18" color="orange" v-show="errors.length"/>
    <Icon
      class="icon"
      type="md-checkmark-circle"
      size="18"
      v-show="!errors.length"
      :class="{'success': !errors.length}"
    />
  </div>
</template>

<script>
import { Icon } from 'iview'

export default {
  name: 'icon-error',
  props: {
    errors: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.icon-error
  position: absolute
  top: 11px
  right: 8px
  .icon
    &.success
      color: $success-color
</style>
