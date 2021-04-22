import { receiveData, goAppDownLoad } from '@/utils/analysis/index.js'
export default {
    install(Vue, router) {
        Vue.prototype.$receiveData = receiveData
        Vue.prototype.$goAppDownLoad = goAppDownLoad
        router.afterEach(() => {
            receiveData('ads_click')
        })
    }
}
