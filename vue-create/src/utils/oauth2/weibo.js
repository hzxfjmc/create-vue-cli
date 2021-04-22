import { wbLoginByAuthCode } from '@/service/user-server.js'
import { API_BASE_URL } from '@/utils/DOMAIN.js'
const APPID = API_BASE_URL.WEIBO_APPID

export function getParameter(name) {
    let RegExpObject = new RegExp(
        '[?&]' + encodeURIComponent(name) + '=([^&]*)'
    )
    if ((name = RegExpObject.exec(window.location.hash)))
        return decodeURIComponent(name[1])
}

let code = getParameter('code')
let state = getParameter('state')
export function weiboOauthRedirect() {
    if (code) {
        return
    }
    let callbackUrl = encodeURIComponent(window.location.href)
    const host = `https://api.weibo.com/oauth2/authorize`
    let url = `${host}?state=wb&client_id=${APPID}&response_type=code&redirect_uri=${callbackUrl}?`
    window.location.href = url
}

export function weiboInitOauth() {
    return new Promise(async (resolve, reject) => {
        if (code && state == 'wb') {
            try {
                let data = await wbLoginByAuthCode({
                    code: code,
                    realUrl: unescape(window.location.origin)
                })
                resolve(data)
            } catch (e) {
                reject(e)
            }
        } else {
            resolve()
        }
    })
}
