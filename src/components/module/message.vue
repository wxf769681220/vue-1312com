<template>
  <ul class="message nav">
    <li class="list-item" v-for="(item,index) in data" :key="index">
      <router-link class="item-link" :to="{'path': item.url}">
        <div>
          <span class="mr-2 text-error">【{{caption}}】</span>
          <span class="title">{{item.title}}</span>
        </div>
        <small class="date">{{item.date}}</small>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'message',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    caption() {
      if (this.data[0].type === 0) {
        return '新闻'
      } else if (this.data[0].type === 1) {
        return '活动'
      } else {
        return '公告'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.message
  display: flex
  flex-direction: column
  .list-item
    line-height: 28px
    .item-link
      display: flex
      align-items: center
      justify-content: space-between
      font-size: $font-size-base
      color: $body-color
      &:hover
        color: $error-color
        background-color: $grey-1
  .text-error
    color: $error-color
</style>
