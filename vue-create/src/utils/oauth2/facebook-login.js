import { facebookLoginByAuthCode } from '@/service/user-oversea-server.js'
import { getParameter } from '@/utils/tools.js'
const clientId = '786705808367640'
import $scriptjs from 'scriptjs'

let code = getParameter('code')
let state = getParameter('state')
export function facebookOauthRedirect(cb) {
    if (code && !state) {
        return
    }
    // let callbackUrl = encodeURIComponent(window.location.href)
    let callbackUrl = `https://m.usmartsecurities.com${window.location
        .pathname +
        window.location.search +
        window.location.hash}`

    const host = `https://www.facebook.com/dialog/oauth`
    let url = `${host}?client_id=${clientId}&redirect_uri=${callbackUrl}&code=acgon&state=fb`
    $scriptjs(['https://code.jquery.com/jquery-3.1.1.min.js'], () => {
        window.jQuery.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: 'https://m.facebook.com/dialog/oauth',
            timeout: 2000,
            complete: function(XMLHttpRequest) {
                if (XMLHttpRequest.status === 200) {
                    window.location.href = url
                } else {
                    cb()
                }
            }
        })
    })
}

export function facebookInitOauth() {
    return new Promise(async (resolve, reject) => {
        if (code && state == 'fb') {
            try {
                let data = await facebookLoginByAuthCode(code)
                resolve(data)
            } catch (e) {
                reject(e)
            }
        } else {
            resolve()
        }
    })
}
