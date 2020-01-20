import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueBus from 'common/js/vue-bus'

import 'swiper/dist/css/swiper.min.css'
import 'common/less/custom.less'
import 'common/stylus/index.styl'
import { Message } from 'iview'
Vue.use(VueBus)

Vue.prototype.$Message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
