import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vCustomCrop from "@/lib/customCrop/lib";
// 使用插件
Vue.use(vCustomCrop);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
