import env from '@/utils/scheme/env'
import JSBridge from '@/utils/js-bridge'
import LS from '@/utils/local-storage'

// 获取地址栏参数
export const getUrlParam = name => {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let loc = window.location.search
    let r = loc.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
}

export async function getLoginStatus() {
    if (env.isYouxinApp) {
        const user = await JSBridge.getAppUser(true)
        return !!user.userToken
    } else {
        const userToken = env.isLocal ? '' : LS.get('userToken')
        return !!userToken
    }
}
