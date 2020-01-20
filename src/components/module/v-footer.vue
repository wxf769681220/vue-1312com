<template>
  <div class="v-footer">
    <div class="container">
      <h3 class="mb-2">抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活 -- 健康游戏忠告</h3>
      <div class="flex">
        <img class="brand" src="~common/img/brand.png" width="277" height="26" alt="logo">
        <div class="content">
          <p>掼蛋世界联系电话：0510-85135333</p>
          <p>地址：江苏省无锡市新吴区金城东路333号28栋3楼</p>
          <p>
            网站备案号：
            <span class="text-primary">苏ICP备16066553号</span> 网络文化经营许可证：
            <span class="text-primary">苏网文[2017]5274-117号</span>
            增值电信业务经营许可证：
            <span class="text-primary">苏 B2-20170340</span>
          </p>
          <p>
            <img class="mr-1" src="~common/img/icon/sgw.png" width="16" height="16">
            <span class="text-primary">苏公网安备 32021402000863号</span>
            江苏弘宝网络科技有限公司 2009-2017 版权所有
            <span class="text-success">家长监护工程</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-footer'
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.v-footer
  padding: 45px 0
  background-color: $grey-1
  .container
    text-align: center
    .flex
      align-items: center
      justify-content: center
      margin-top: 30px
      .brand
        margin-right: 20px
      .content
        padding-left: 20px
        border-left: 1px solid $border-color
        text-align: left
        & > p
          line-height: 24px
  .text-primary
    color: $primary-color
  .text-success
    color: $success-color
</style>
