// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import AMap from 'vue-amap'

Vue.use(AMap)

AMap.initAMapApiLoader({
  // 申请的高德key
  key: '127d627783791c9c46776b49e54375f6',
  // 插件集合
  plugin: ['AMap.Transfer']
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
