import { wechatLoginByAuthCode } from '@/service/user-server.js'
import { getParameter } from '@/utils/tools.js'
import { API_BASE_URL } from '@/utils/DOMAIN.js'
const APPID = API_BASE_URL.WECHAT_APPID

let code = getParameter('code')
let state = getParameter('state')

export function oauthRedirect(scope = 'snsapi_userinfo', state = 'wechat') {
    //  主动授权没有问题，自动授权需要优化一下逻辑 比如已经授权过 可以不用授权了 过期code 需要清空
    if (code) {
        return
    }
    let callbackUrl = encodeURIComponent(window.location.href)
    const host = `https://open.weixin.qq.com/connect/oauth2/authorize`
    let url = `${host}?appid=${APPID}&redirect_uri=${callbackUrl}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
    window.location.href = url
}

export function initOauth() {
    return new Promise(async (resolve, reject) => {
        if (code && state === 'wechat') {
            try {
                let data = await wechatLoginByAuthCode(code)
                resolve(data)
            } catch (e) {
                reject(e)
            }
        } else {
            resolve()
        }
    })
}
