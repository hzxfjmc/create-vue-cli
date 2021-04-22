import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes: [
        {
            name: 'fund-index',
            path: '/',
            meta: { title: 'home', auth: true },
            component: () => import(`@/pages/A/views/index.vue`)
        }
    ]
})
