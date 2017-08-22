import './assets/scss/theme.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// import 'highlight.js/styles/agate.css'

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
