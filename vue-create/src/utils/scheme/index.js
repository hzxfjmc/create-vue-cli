import env from './env'
import { getUaValue } from '../html-utils'
import { compareVersion } from '@/utils/tools.js'
import jsBridge from '@/utils/js-bridge.js'
const scheme = {
    mailandBase: 'yxstock://yx.stock.app',
    hkBase: 'yxusmart://yx.usmart.app',

    /**
     * 在APP外，打开APP指定页面（根据url参数区分大陆版、香港版）
     * 1.在微信中，弹出引导页
     * 2.未安装，安卓和ios，都跳转对应的下载页面
     * 3.已安装，安卓：跳转App；ios：跳转App，h5页面将会跳转下载链接
     * @param path APP路径
     * @param middlePage 中间页(某些情况需尝试打开APP)路径，默认下载页，将自动给该链接添加appUrl参数
     */
    gotoApp(path = '', middlePage = env.appDownloadUrl) {
        const ua = navigator.userAgent
        const isQQ = /qq\/\d/i.test(ua)
        const isWeibo = /\sweibo\s/i.test(ua)
        if (env.isWechat || env.isWxwork || isQQ || isWeibo) {
            this.showLeadin()
            return
        }
        // scheme跳转
        const base = env.isMainland ? this.mailandBase : this.hkBase
        const url = base + path
        // 在appDownloadUrl中添加query参数appUrl，目标链接在安卓中将会用iframe继续打开appUrl
        const getMiddlePage = () => {
            const hashIndex = middlePage.indexOf('#')
            const hasHash = hashIndex > -1
            const noHashUrl = hasHash
                ? middlePage.slice(0, hashIndex)
                : middlePage
            const hash = hasHash ? middlePage.slice(hashIndex) : ''
            const sign = middlePage.indexOf('?') > -1 ? '&' : '?'
            const query = `appUrl=${encodeURIComponent(url)}`
            return noHashUrl + sign + query + hash
        }
        if (env.isAndroid) {
            const t1 = Date.now()
            let iframe = document.createElement('iframe')
            iframe.src = url
            iframe.style = 'display: none'
            document.body.appendChild(iframe)
            iframe.parentNode.removeChild(iframe)
            iframe = null
            const t2 = Date.now()
            const delay = 200
            setTimeout(() => {
                // 未安装APP（安卓部分机型会不一致）
                if (t2 - t1 < delay + 100) {
                    location.href = getMiddlePage()
                }
            }, delay)
            return
        }
        if (env.isIos) {
            // ios safari，alert不能卡住进程
            const uaVersion = getUaValue('Version', false)
            if (compareVersion('11.0.0', uaVersion) >= 0) {
                location.href = getMiddlePage()
            } else {
                location.href = url
                setTimeout(() => (location.href = middlePage), 200)
            }
            return
        }
        location.href = url
    },

    // 中间页跳转APP
    middlePageTryGotoApp(appUrl) {
        if (env.isAndroid) {
            let iframe = document.createElement('iframe')
            iframe.src = appUrl
            iframe.style = 'display: none'
            document.body.appendChild(iframe)
        } else if (env.isIos) {
            location.href = appUrl
        }
    },

    /**
     * 跳转至app模块
     * @param url
     * @param isWaitingResult
     * @returns {*|Promise<Object>}
     */
    gotoNativeModule(url, isWaitingResult = false) {
        return this.callApp('goto_native_module', {
            url,
            isWaitingResult
        })
    },
    /**
     * 跳转资讯详情
     * @param newsid
     * @param options
     * @param options.type 1-普通资讯，2-必读资讯（旧版本需要区分，新版本可传1）
     * @param options.noShare 默认false，是否在APP中展示分享和字体变大
     */
    gotoNewsDetail(newsid, options = {}) {
        options.type = options.type === undefined ? 1 : options.type
        options.noShare = !!options.noShare
        if (env.isYouxinApp) {
            if (options.noShare) {
                location.href = `/webapp/market/news.html?newsid=${newsid}&noShare=1`
            } else {
                jsBridge.gotoNativeModule(
                    `yxzq_goto://info_detail?type=${options.type}&newsid=${newsid}`
                )
            }
        } else {
            location.href = `/webapp/market/news.html?newsid=${newsid}`
        }
    },

    /**
     * 跳转APP中的webview
     * @param url h5链接(全url)
     * @param options
     * @param options.middlePage 中间页面地址，默认下载页面
     * @param options.titleBarVisible titleBar是否显示
     * @param options.title titleBar标题
     */
    gotoWebview(url, options = {}) {
        options.titleBarVisible =
            options.titleBarVisible === undefined
                ? true
                : options.titleBarVisible
        options.title = options.title || ''
        const targetPath = `/h5_page?url=${encodeURIComponent(url)}&titleBarVisible=${options.titleBarVisible}&title=${options.title}` // eslint-disable-line
        this.gotoApp(targetPath, options.middlePage)
    },

    // 跳转个股详情
    gotoStockDetail(market, code, options = {}) {
        this.gotoApp(
            `/stock_detail?market=${market}&code=${code}`,
            options.middlePage
        )
    },

    // 显示引导下载
    showLeadin() {
        const root = document.createElement('div')
        root.style.zIndex = 99999
        root.style.position = 'fixed'
        root.style.left = 0
        root.style.right = 0
        root.style.top = 0
        root.style.bottom = 0
        root.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
        // root.style.backgroundImage = `url(${require('./download-hands-tip.png')})`
        root.style.backgroundPosition = 'right top'
        root.style.backgroundRepeat = 'no-repeat'
        root.style.textAlign = 'center'
        const p = document.createElement('p')
        p.style.color = '#fff'
        p.style.fontSize = '16px'
        p.style.marginTop = '170px'
        p.style.width = '90%'
        p.style.marginLeft = '5%'
        p.style.lineHeight = '26px'
        let obj = {
            zhCHS:
                '查看更多详情，打开uSMART盈立智投客户端，点击右上角，选择在浏览器中打开',
            zhCHT:
                '查看更多詳情，打開uSMART盈立智投客戶端，點擊右上角，選擇在瀏覽器中打開',
            en:
                'For more details, open the uSMART Client Click on here and select open in the browser'
        }
        p.innerText = obj[env.lang]
        const img = document.createElement('img')
        img.style.position = 'fixed'
        img.style.right = '10px'
        img.style.top = '10px'
        img.style.height = '150px'
        img.src = `${require('./Icon_up.png')}`
        const button = document.createElement('button')
        button.style.display = 'block'
        button.style.background = 'transparent'
        button.style.border = '1px solid #fff'
        button.style.borderRadius = '5px'
        button.style.color = '#fff'
        button.style.outline = 'none'
        button.style.cursor = 'pointer'
        button.style.textAlign = 'center'
        button.style.width = '94px'
        button.style.margin = '0 auto 30px'
        button.style.height = '36px'
        button.style.lineHeight = '32px'
        button.style.fontSize = '14px'
        button.style.position = 'absolute'
        button.style.right = '0'
        button.style.left = '0px'
        button.style.bottom = '80px'
        let returnObj = {
            zhCHS: '返回',
            zhCHT: '返回',
            en: 'Cancel'
        }
        button.innerText = returnObj[env.lang]
        root.appendChild(p)
        root.appendChild(img)
        root.appendChild(button)
        document.body.appendChild(root)
        button.onclick = () => {
            root.parentNode.removeChild(root)
        }
    }
}

export default scheme
