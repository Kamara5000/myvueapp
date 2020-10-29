import Vue from 'vue'
import App from './App.vue'
import router from './router'
import myStore from './store/index'

Vue.config.productionTip = false
  
new Vue({
  store: myStore,
  router,
  render: h => h(App)
}).$mount('#app')
