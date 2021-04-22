import Vue from 'vue'
import router from './router'
import App from './App.vue'
import { Dialog, PullRefresh } from 'vant'
Vue.use(Dialog)
Vue.use(PullRefresh)
import storeMethod from '@/store/index.js'
const store = storeMethod()

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
