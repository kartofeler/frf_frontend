// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import VueMaterial from 'vue-material'
import VueConfig from 'vue-config'
import round from 'vue-round-filter'
import Moment from 'vue-moment'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(resource)
Vue.use(VueConfig, {
  domain: 'http://localhost:8080/#/'
})

Vue.material.registerTheme('default', {
  primary: 'teal',
  accent: 'cyan',
  warn: 'red',
  background: 'grey'
})
Vue.use(Moment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  filters: {
    round
  }
})

Vue.prototype.$last = function (item, list) {
  return item === list[list.length - 1]
}

Vue.prototype.$first = function (item, list) {
  return item === list[0]
}
