<template>
  <div class="navbar-main">
    <div class="container">
      <ul class="nav">
        <li class="nav-item" v-for="item in data" :key="item.title">
          <Dropdown>
            <router-link
              class="nav-link"
              :class="{'default' : item.children.length ? true : false}"
              :to="{'path': item.children.length ? $route.fullPath : item.link}"
            >
              <p class="title">{{item.title}}</p>
              <small class="subtitle">{{item.subtitle}}</small>
            </router-link>
            <!-- 有子菜单时显示 -->
            <DropdownMenu slot="list" v-if="item.children.length">
              <DropdownItem v-for="child in item.children" :key="child.title">
                <router-link class="nav-link" :to="{'path': child.link}">{{child.title}}</router-link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem } from 'iview'
export default {
  name: 'navbar-main',
  data() {
    return {
      data: [
        {
          title: '下载专区',
          subtitle: 'DOWNLOAD',
          link: '/download',
          children: [
            {
              title: '游戏下载',
              subtitle: '',
              link: '/download'
            },
            {
              title: '注册账号',
              subtitle: '',
              link: '/service/register'
            }
          ]
        },
        {
          title: '游戏资料',
          subtitle: 'GAME INFO',
          link: '/gameInfo',
          children: [
            {
              title: '掼蛋',
              subtitle: 'GAME INFO',
              link: '/gameInfo'
            },
            {
              title: '斗地主',
              subtitle: 'GAME INFO',
              link: '/gameInfo'
            },
            {
              title: '升级',
              subtitle: 'GAME INFO',
              link: '/gameInfo'
            },
            {
              title: '飞行棋',
              subtitle: 'GAME INFO',
              link: '/gameInfo'
            }
          ]
        },
        {
          title: '掼蛋江湖',
          subtitle: 'GUAN DAN',
          link: '',
          children: [
            {
              title: '创立公会',
              subtitle: 'GAME INFO',
              link: '/gameInfo'
            },
            {
              title: '工会纵览',
              subtitle: 'GAME INFO',
              link: '/gameInfo'
            },
            {
              title: '江湖名人堂',
              subtitle: 'GAME INFO',
              link: '/gameInfo'
            },
            {
              title: '联盟理事会',
              subtitle: 'GAME INFO',
              link: '/gameInfo'
            },
            {
              title: '联盟章程',
              subtitle: 'GAME INFO',
              link: '/gameInfo'
            }
          ]
        },
        {
          title: '活动赛事',
          subtitle: 'SPORTS',
          link: '/sports',
          children: []
        },
        {
          title: '官方商城',
          subtitle: 'STORE',
          link: '/mall',
          children: []
        },
        {
          title: '官方论坛',
          subtitle: 'COMMUNITY',
          link: '/community',
          children: []
        },
        {
          title: '客服中心',
          subtitle: 'SERVICE',
          link: '/service',
          children: []
        },
        {
          title: '招聘信息',
          subtitle: 'JOIN US',
          link: '/joinUs',
          children: []
        },
        {
          title: '关于我们',
          subtitle: 'ABOUT US',
          link: '/aboutUs',
          children: []
        }
      ]
    }
  },
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.navbar-main
  background-color: rgba(0, 0, 0, 0.3)
  box-shadow: 0 2px 2px rgba(51, 51, 51, 0.2)
  .nav-item
    flex: 1
  .nav-link
    display: block
    padding: 10px 0
    text-align: center
    color: $white
    &:hover
      color: $warning-color
    &.active
      color: $warning-color
    &.active
      &.default
        color: $white
        &:hover
          color: $warning-color !important
    .title
      font-size: $font-size-large-m
    .subtitle
      font-size: $font-size-small
      color: $subtitle-color !important
    .icon
      position: absolute
      bottom: -2px
      left: 50%
      transform: translateX(-50%)
  >>>.ivu-dropdown
    display: block !important
    .ivu-select-dropdown
      .nav-link
        padding: 4px 0
        color: $body-color
        &:hover
          color: $warning-color
</style>
