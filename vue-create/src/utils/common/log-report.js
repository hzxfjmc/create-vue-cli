import JSBridge from '../js-bridge'
import { logjson } from '@/service/quotes-applogupload'
import { getUaValue } from '../html-utils'
import dayjs from 'dayjs'
import Vue from 'vue'

/**
 * 比较版本号
 * @param v1 版本号，例：1.0.0
 * @param v2 版本号，例：1.0.0
 * @returns number 0：v1=v2，1：v1>v2，-1：v1<v2
 */
function compareVersion(v1, v2) {
    const v1_arr = v1.split('.').map(i => parseInt(i))
    const v2_arr = v2.split('.').map(i => parseInt(i))
    const maxLength =
        v1_arr.length > v2_arr.length ? v1_arr.length : v2_arr.length
    for (let i = 0; i < maxLength; i++) {
        if (v1_arr[i] === undefined) {
            return -1
        }
        if (v2_arr[i] === undefined) {
            return 1
        }
        if (v1_arr[i] > v2_arr[i]) {
            return 1
        }
        if (v1_arr[i] < v2_arr[i]) {
            return -1
        }
    }
    return 0
}

const appDef = () => false

window.h5HistoryBack = window.h5HistoryBack || appDef
window.h5ClosePage = window.h5ClosePage || appDef
window.appVisible = window.appVisible || function() {}

window.onerror = async function(message, source, lineno, colno, error) {
    // 同源策略下，不同url上报是有问题的
    if (message !== 'Script error.' && !source) {
        return true
    }
    const appVersion = getUaValue('appVersion')
    const data = {
        occr_time: dayjs(Date.now()).format(`YYYY-MM-DDTHH:mm:ss.SSS`),
        platform: 'H5',
        version: appVersion,
        type: 'H5Error',
        name: navigator.userAgent,
        url: location.href,
        code: error.code,
        desc: message,
        app_type: getUaValue('appType') || '1',
        lang_type: parseInt(getUaValue('langType') || '1'),
        extend_msg: `source：${source}:${lineno}:${colno}`
    }
    if (JSBridge.isYouxinApp) {
        if (compareVersion(appVersion, '1.2.0') >= 0) {
            JSBridge.callApp('command_upload_elk_log', data)
        }
        const user = await JSBridge.getAppUser()
        data.net_type = getUaValue('nt')
        data.uuid = user.userId
        logjson({ list: [data] }).catch(e => console.log('日志上报失败', e))
    } else {
        data.net_type = ''
        data.uuid = ''
        logjson({ list: [data] }).catch(e => console.log('日志上报失败', e))
    }
}

// 错误栈、实例、生命周期
Vue.config.errorHandler = async function(error, source, lineno) {
    // 同源策略下，不同url上报是有问题的
    if (error !== 'Script error.' && !source) {
        return true
    }
    const appVersion = getUaValue('appVersion')
    const data = {
        occr_time: dayjs(Date.now()).format(`YYYY-MM-DDTHH:mm:ss.SSS`),
        platform: 'H5',
        version: appVersion,
        type: 'H5Error',
        name: navigator.userAgent,
        url: location.href,
        code: lineno,
        desc: error.message,
        app_type: getUaValue('appType') || '1',
        lang_type: parseInt(getUaValue('langType') || '1'),
        extend_msg: `vue-error:${JSON.stringify(error.stack)}`
    }
    if (JSBridge.isYouxinApp) {
        if (compareVersion(appVersion, '1.2.0') >= 0) {
            JSBridge.callApp('command_upload_elk_log', data)
        }
        const user = await JSBridge.getAppUser()
        data.net_type = getUaValue('nt')
        data.uuid = user.userId
        logjson({ list: [data] }).catch(e => console.log('日志上报失败', e))
    } else {
        data.net_type = ''
        data.uuid = ''
        console.log(data)
        logjson({ list: [data] }).catch(e => console.log('日志上报失败', e))
    }
}
