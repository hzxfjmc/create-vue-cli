import Vue from 'vue'
import {
    Button,
    Cell,
    CellGroup,
    Toast,
    Tab,
    Tabs,
    Row,
    Col,
    Dialog,
    Field
} from 'vant'
import { Picker } from 'vant-fork'
import { NumberKeyboard, Skeleton } from 'vant-fork'
import { lang } from '@/utils/html-utils'
const langMap = {
    zhCHS: {
        loading: '加载中...',
        confirmButtonText: '确认',
        cancelButtonText: '取消	',
        okToSure: '我知道了'
    },
    zhCHT: {
        loading: '加載中...',
        confirmButtonText: '確認',
        cancelButtonText: '取消	',
        okToSure: '我知道了'
    },
    en: {
        loading: 'loading...',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        okToSure: 'OK'
    }
}

Vue.use(Dialog)
Vue.use(NumberKeyboard)
Vue.use(Picker)
Vue.use(Skeleton)
export const closeModule = () => {
    Toast.clear()
}
Vue.prototype.$close = closeModule

export const loadingModule = msg => {
    Toast.loading({
        mask: true,
        message: msg || langMap[lang]['loading'],
        duration: 0,
        position: 'center'
    })
}
Vue.prototype.$loading = loadingModule

Vue.prototype.$confirm = arg => {
    arg = {
        confirmButtonText: langMap[lang]['confirmButtonText'],
        cancelButtonText: langMap[lang]['cancelButtonText'],
        ...arg,
        'message-align': 'center'
    }
    return Dialog.confirm(arg)
}
export const alertModule = arg => {
    if (typeof arg === 'string') {
        arg = {
            message: arg,
            confirmButtonText: langMap[lang]['okToSure']
        }
    }
    arg = {
        ...arg,
        'message-align': 'center'
    }
    return Dialog.alert(arg)
}
Vue.prototype.$alert = alertModule

Vue.prototype.$toast = (msg, direction = 'bottom', options) => {
    return new Promise((resolve, reject) => {
        try {
            if (!msg) {
                resolve()
                return
            }
            Toast({
                position: direction,
                message: msg,
                duration: 2000,
                onClose: resolve,
                ...options
            })
        } catch (e) {
            reject(e)
        }
    })
}
// 很多项目用不到这些 当时只是方便开户项目引用的
// 不要在这新增，要使用的话 直接在页面引用的方式使用 谢谢 by 谢俊
Vue.component('van-cell-group', CellGroup)
Vue.component('van-button', Button)
Vue.component('van-cell', Cell)
Vue.component('van-tab', Tab)
Vue.component('van-tabs', Tabs)
Vue.component('van-row', Row)
Vue.component('van-col', Col)
Vue.component('van-field', Field)
