import Vue from 'vue'
import App from './App'
import store from '@/store/index.js'
import request from './api/http.js'
import user from './api/user.js'
import globalVariable from "global/variable.js"
Vue.config.productionTip = false

App.mpType = 'app'
// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView)
Vue.use(store)
Vue.prototype.$user=user
Vue.prototype.$globalVar=globalVariable
const app = new Vue({
	store,
    ...App
})
app.$mount()
