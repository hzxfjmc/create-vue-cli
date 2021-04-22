// 值存在
export function isDef(value) {
    return value !== undefined && value !== null
}

// 对象映射 'a.b' {a: {b: 'val'}}
export function get(object, path = '') {
    const keys = path.split('.')
    let result = object

    keys.forEach(key => {
        result = isDef(result[key]) ? result[key] : ''
    })

    return result
}

// 是否是对象
export function isObj(x) {
    const type = typeof x
    return x !== null && (type === 'object' || type === 'function')
}

// 深拷贝
const { hasOwnProperty } = Object.prototype

function assignKey(to, from, key) {
    const val = from[key]

    if (!isDef(val)) {
        return
    }

    if (!hasOwnProperty.call(to, key) || !isObj(val)) {
        to[key] = val
    } else {
        to[key] = deepAssign(Object(to[key]), from[key])
    }
}

export function deepAssign(to, from) {
    Object.keys(from).forEach(key => {
        assignKey(to, from, key)
    })

    return to
}

const install = (Vue, options) => {
    const proto = Vue.prototype
    proto.$i18n = proto.$i18n || {}
    // 初始化多语言
    deepAssign(proto.$i18n, options)

    const _vm = new Vue({
        data: options
    })
    Object.defineProperty(Vue.prototype.$i18n, 'lang', {
        get() {
            return _vm.lang
        }
    })
    proto.$t = (path, ...args) => {
        if (Array.isArray(path)) {
            let index =
                {
                    zhCHS: 0,
                    zhCHT: 1,
                    en: 2
                }[_vm.lang] || 0
            return path[index] || ''
        }
        let messages = _vm.messages[_vm.lang]

        if (!proto.$i18n.messages) {
            if (process.env.NODE_ENV !== 'production') {
                console.error('[yxI18n] Locale not correctly registered')
            }
            return () => path
        }
        const message = get(messages, path)
        return typeof message === 'function' ? message(...args) : message || ''
    }
    proto.$i18n.add = (messages = {}) => {
        deepAssign(proto.$i18n.messages, messages)
    }
    proto.$i18n.setLang = lang => {
        _vm.lang = lang
    }
    Vue.mixin({
        beforeCreate() {
            this.$options.i18n && this.$i18n.add(this.$options.i18n)
        }
    })
}

export default {
    install
}
