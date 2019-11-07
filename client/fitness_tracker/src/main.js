  
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  data: {
    loggedIn: false
  },
  router,
  render: h => h(App)
}).$mount('#app')