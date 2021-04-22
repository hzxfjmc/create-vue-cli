import Vue from 'vue'
import dayjs from 'dayjs'

/**
 * 数字转化为千位分隔，支持小数
 * value | thousand-spilt
 */
export const handleThousandSpilt = function(value) {
    if (!value && value !== 0) {
        return ''
    }
    return value
        .toString()
        .replace(/(\d{1,3})(?=\d)(?!\.\d*)(?=(\d{3})+(\.|$))/g, '$1,')
}
Vue.filter('thousand-spilt', handleThousandSpilt)

Vue.filter('idcard', function(num) {
    return num.substring(0, 5) + '*******' + num.substring(num.length - 5)
})
Vue.filter('date-format', function(date, format = 'YYYY-MM-DD HH:mm') {
    return dayjs(date).format(format)
})
//数字化千分位加两位小数（四舍五入）
Vue.filter('formatCurrency', function(num) {
    let strVal = String(num)
    if (strVal.indexOf('.') != -1) {
        return `${Number(
            String(Number(strVal).toFixed(2)).split('.')[0]
        ).toLocaleString()}.${String(Number(strVal).toFixed(2)).split('.')[1]}`
    } else {
        return `${Number(strVal).toLocaleString()}.00`
    }
})

// 截取小数，默认保留两位，不足补0
Vue.filter('sliceFixedTwo', function(n, l = 2) {
    if (l === 0) {
        return n.split('.')[0]
    }
    const sliceDeci = (s, l) => {
        let deci = s.split('.')[1].slice(0, l)
        return s.split('.')[0] + '.' + deci
    }

    n = +n
    let s = n + ''
    // 整数 直接补0
    if (s.indexOf('.') === -1) {
        if (l > 0) {
            s += '.'
        }
        for (let i = 0; i < l; i++) {
            s += '0'
        }
        return sliceDeci(s, l)
    }

    let deci = s.split('.')[1]
    if (deci.length < l) {
        for (let i = 0; i < l - deci.length; i++) {
            s += '0'
        }
    }

    return sliceDeci(s, l)
})

//不够五位数补0
Vue.filter('PrefixInteger', function(num) {
    return (Array(5).join('0') + num).slice(-5)
})

// i18n
Vue.filter('i18n', function(i18nData = {}, langType = 'zhCHS', langMap = []) {
    let langTypeMap
    if (langMap && langMap.length !== 0) {
        langTypeMap = { zhCHS: langMap[0], zhCHT: langMap[1], en: langMap[2] }
    } else {
        langTypeMap = { zhCHS: 'zhCn', zhCHT: 'zhHk', en: 'en' }
    }
    // 例如数据是
    // name: {
    //     nameCn: 'xxx',
    //     nameHK: 'xxx',
    //     nameEn: 'xxx',
    // }
    // 但是 name对象的key无法控制，是后端决定的，所以这里需要提供自定义的key方式
    let resolveData =
        (i18nData[langTypeMap[langType]] && i18nData[langTypeMap[langType]]) ||
        '--'
    return resolveData
})
