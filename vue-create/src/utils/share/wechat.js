import $scriptjs from 'scriptjs'
import { jsAuth } from '@/service/user-server.js'
import { API_BASE_URL } from '@/utils/DOMAIN.js'
import { isWeixin } from '@/utils/html-utils.js'
const APPID = API_BASE_URL.WECHAT_APPID

let wechatReady = new Promise(function(resolve, reject) {
    $scriptjs(['https://res.wx.qq.com/open/js/jweixin-1.2.0.js'], () => {
        let wx = window.wx
        jsAuth().then(sign => {
            let config = {
                nonceStr: sign.randomStr,
                signature: sign.signature,
                timestamp: sign.timestamp,
                appId: APPID,
                jsApiList: [
                    'scanQRCode',
                    'chooseImage',
                    'uploadImage',
                    'hideMenuItems',
                    'hideAllNonBaseMenuItem',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone',
                    'chooseWXPay'
                ]
            }
            wx.config(config)
            wx.ready(() => {
                console.log('ready')
                resolve(wx)
            })
            wx.error(res => {
                reject(res)
                console.error('wechat init faild', res)
            })
        })
    })
})

// title: title, // 分享标题
// desc: desc, // 分享描述
// link: link, // 分享链接
// imgUrl: imgUrl, // 分享图标
export function wechatShare(share, success, cancel) {
    // 如果不在微信环境 不执行
    if (!isWeixin) {
        return
    }
    let shareJson = {
        ...share,
        success: () => {
            success && success()
        },
        cancel: () => {
            cancel && cancel()
        }
    }
    wechatReady.then(wx => {
        wx.onMenuShareTimeline(shareJson)
        wx.onMenuShareAppMessage(shareJson)
        wx.onMenuShareQQ(shareJson)
        wx.onMenuShareWeibo(shareJson)
        wx.onMenuShareQZone(shareJson)
    })
}
