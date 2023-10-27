import Vue from 'vue'
import App from './App'
import store from '@/store/index.js'
Vue.config.productionTip = false

App.mpType = 'app'
// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView)
Vue.use(store)
const app = new Vue({
	store,
    ...App
})
app.$mount()
