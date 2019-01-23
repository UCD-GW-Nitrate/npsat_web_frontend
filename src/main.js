// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
// import router from './router'

// TODO: For final deployment, we'd want a way for each server to define this
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
// Public Token - change for final deployment!
axios.defaults.headers.common['Authorization'] = 'Token c4e255c1d9f4404dab05ed27aa2e929cf8f53c42'

Vue.config.productionTip = false

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */

// eslint-disable next-line
var NPSATCrops = new Vue({
  el: '#npsat_web',
  components: { App },
  template: '<App/>'
})

console.log(NPSATCrops)
