
开发文档
=========================================

#### 开发环境

1. node ^10
2. vue-cli3 脚手架
3. ES6 语法

## 技术栈

#### vue/vue路由/vue状态管理
vue^2.0 + vue-router^3.0 + vuex^3.0

#### 代码检测工具
ESLint

#### 数据通信
axios^0.16.1

#### UI框架
iview^3.0

#### 表单验证
vee-validate^3.0.3

#### 轮播图插件
swiper^4.5.0

#### CSS预处理器
stylus、less

#### 相关链接

1. vue 官方文档： https://cn.vuejs.org/
2. vue-router 官方文档: https://router.vuejs.org/zh/
3. vuex 官方文档：https://vuex.vuejs.org/zh/
4. ESLint 官方文档：https://eslint.org/
5. axios github地址：https://github.com/axios/axios
6. iview^3.0 官方文档：https://www.iviewui.com/docs/introduce
7. vee-validate github地址：https://github.com/logaretm/vee-validate
8. swiper 官方文档：https://www.swiper.com.cn/
9. stylus 官方文档：https://stylus.bootcss.com/

### 功能模块
* 登录模块  
* 注册模块  
* 商品推荐  
* 客服中心
* 首页轮播图
* 消息文章
* 排行榜top10
* 活动事件
* 游戏下载
* 游戏资料
* 掼蛋江湖
* 活动赛事
* 官方商城
* 官方论坛
* 客服中心
* 招聘信息
* 关于我们

## 工程目录

-- dist // 编译后静态文件  
-- node_modules // 依赖包  
-- src  // 项目核心文件  
&ensp;&ensp;-- api ·································································································· 数据通信  
&ensp;&ensp;&ensp;&ensp;-- index ·············· 入口文件  
&ensp;&ensp;&ensp;&ensp;-- config ············· 配置文件  
&ensp;&ensp;-- common ························································································· 资源管理  
&ensp;&ensp;&ensp;&ensp;-- img ·············· 图片管理  
&ensp;&ensp;&ensp;&ensp;-- js ··············· 脚本管理  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- axios.js ·············· axios插件封装  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- bus.js ·············· 中央事件总线vue-bus插件封装  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- jsonp.js  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- lib.js ·············· 常用函数  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- prefix.js  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- utils.js ············ 项目中所使用的函数  
&ensp;&ensp;&ensp;&ensp;-- less ·············· iview  
&ensp;&ensp;&ensp;&ensp;-- stylus ·············· css管理  
&ensp;&ensp;-- components ·········································································· 组件管理  
&ensp;&ensp;&ensp;&ensp;-- base ············ 基础组件  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- v-slider.vue ············ 滚动组件
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- valid-code.vue ············ 验证码组件
&ensp;&ensp;&ensp;&ensp;-- body ············ 放置在body下的组件  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- login.vue ············ 登录组件  
&ensp;&ensp;&ensp;&ensp;-- module ···········功能组件  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- game-download.vue ·········· 游戏下载  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- goods-recommend.vue ·········· 商品推荐  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- icon-error.vue ··············· 图标
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- match-event.vue ············ 比赛事件  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- message.vue ········ 比赛视频  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- navbar-main.vue ·········  主导航  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- navbar-top.vue ·········· 顶部固定导航  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- rounds-score.vue ·········· 本轮成绩  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- news.vue ·········新闻中心  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- personal-center.vue ·········· 个人中心  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- qr-code.vue ········· 二维码  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- service-center.vue ··········· 客服中心  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- service-terms.vue ······· 服务条款  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- top10.vue ··········· 排行榜  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- v-footer.vue ··········· 页脚  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- v-header.vue ········ header区块  
&ensp;&ensp;&ensp;&ensp;--- about-us.vue ············ 关于我们  
&ensp;&ensp;&ensp;&ensp;--- community.vue ············· 社区  
&ensp;&ensp;&ensp;&ensp;--- download.vue ············ 游戏下载  
&ensp;&ensp;&ensp;&ensp;--- downloadMob.vue ·············· 移动端游戏下载  
&ensp;&ensp;&ensp;&ensp;--- forget-password.vue ····· 忘记密码  
&ensp;&ensp;&ensp;&ensp;--- getCode.vue ····· 连接微信公众号过度组件1  
&ensp;&ensp;&ensp;&ensp;--- getWxCode.vue ······ 连接微信公众号过度组件2  
&ensp;&ensp;&ensp;&ensp;--- index.vue ········ 首页  
&ensp;&ensp;&ensp;&ensp;--- join-us.vue ············ 加入我们  
&ensp;&ensp;&ensp;&ensp;--- mall.vue ············ 商城  
&ensp;&ensp;&ensp;&ensp;--- newUser.vue ············ 新用户  
&ensp;&ensp;&ensp;&ensp;--- redEnvelopeGet.vue ············ 红包领取  
&ensp;&ensp;&ensp;&ensp;--- redEnvelopeMobBind.vue ············ 微信绑定手机  
&ensp;&ensp;&ensp;&ensp;--- register.vue ············ 注册  
&ensp;&ensp;&ensp;&ensp;--- service.vue ············ 客服中心  
&ensp;&ensp;&ensp;&ensp;--- sports.vue ············ 赛事  
&ensp;&ensp;&ensp;&ensp;--- user-center.vue ············ 用户中心  
&ensp;&ensp;&ensp;&ensp;--- wxGamePay.vue ············ 微信支付  
&ensp;&ensp;-- router ·········································································· 路由  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- index.vue ············ 入口文件  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- config.vue ············ 配置文件  
&ensp;&ensp;-- store ·········································································· vuex状态管理  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- index.vue ············ 入口文件  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- actions.vue ·········· 操作数据  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- getters.vue ·········· 取值  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- mutations.vue ········ 操作数据  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-- state.vue ············ 存值  
&ensp;&ensp;-- App.vue ·········································································· vue根组件  
&ensp;&ensp;-- main.vue ········································································· 入口文件  
-- .browserslistrc  
-- .editorconfig  
-- .eslintrc // eslit配置文件  
-- .gitignore  
-- babel.config  
-- package-lock.json  
-- package.json // 项目基本信息  
-- postcss.config  
-- README.md  
-- vue.config // webpack配置文件  

## 数据通信方式

1. 父子关系组件，父组件可以使用 props 把数据传给子组件
2. 父子关系组件，子组件可以使用 $emit 触发父组件的自定义事件
3. 非父子关系组件，当前组件可以使用中央事件总线 $bus.$emit 的方式向外派发自定义事件，目标组件使用 $bus.$on 监听自定义的事件
4. 通过带参路由获取数据 （this.$route.query / params）
5. 通过调用api接口获取数据

## 资源配置

#### webpack 配置文件 vue.config.js

`使用 vue-cli3.0 脚手架创建 vue 项目需要手动创建 vue.config.js 文件，其相关配置如下：`  

1. iview 相关配置
2. 通过 config.resolve.alias 配置别名（如：访问 src/api 时，可以直接访问 api）

#### ESLint 配置文件 .eslintrc.js

`项目使用 eslint 做代码检查工具，如需要关闭某条规则只需将此规则值为 0 即可。`  

#### 项目入口文件 main.js

1. 引入默认配置 （vue/app/router/store）
2. 引入自定义全局css样式表：import 'common/stylus/index.styl'
3. 引入 iview 相关配置
4. 引入自定义插件vue-bus： import bus from 'common/js/bus'

#### vue-router 路由配置

1. index.js ·········· 入口文件
2. config.js ········· 配置文件

#### vuex 状态管理配置

1. index.js ·········· 入口文件
2. action.js ········· 异步操作数据
3. mutations.js ······ 操作数据
4. state.js ·········· 存值
5. getters.js ········ 取值


`项目使用 vuex 默认提供的语法糖：`  
存值时使用：  
...mapMutations({  
&ensp;&ensp;setToken: 'SET_TOKEN'  
})  
this.setToken(token)  

取值时在 computed 计算属性中使用：  
computed: {  
&ensp;&ensp;...mapGetters([  
&ensp;&ensp;&ensp;&ensp;'token'  
&ensp;&ensp;])  
}  

#### 网络请求 src/common/js/axios 封装

1. 引入axios 和 vuex 模块
2. 封装两种请求类型： get 和 post 方法

#### iview^3.0 配置

1. 项目使用 iview^3.0 版本, 借助插件 babel-plugin-import 实现按需加载组件，减少文件体积。
2. 在 main.js 中引入 全局样式文件 custom.less, 对相关组件进行配置
3. 如实现按需引入还需要在 babel.config 中配置
4. 组件内通过 import { Butto } from 'view-design' 调用相关组件

#### 全局 css 样式表配置

1. 在 main.js 中引入 import 'common/less/custom.less' // iview框架主表
2. 在 main.js 中引入 import 'import 'common/stylus/index.styl' // 自定义常用类
3. 组件中在 scoped 模式下，使父组件的样式能够深入影响到子组件，可以使用 >>>

#### 打包后资源可视化界面（dist report.html）
`"report": "vue-cli-service build --report"`