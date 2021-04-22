import config from '@/utils/config'
import JSBridge from '@/utils/js-bridge'
import { isAndroid, isIOS, isYouxinApp, getUaValue } from '../html-utils'
import domain from '../DOMAIN'
const uuid = getUaValue('uuid')
let version = getUaValue('appVersion')
let langType = getUaValue('langType')
langType = langType === '' ? '1' : langType
if (version === '') {
    version = config.version
}

// 大陆版开户不要多语言
// if (window.location.href.indexOf('/open-account/apply.html') > -1) {
//     langType = '1'
// }
// 账户激活页只为繁体
// if (window.location.href.indexOf('/marketing/activate-account.html') > -1) {
//     langType = '2'
// }

let XUid = '' // X-Uid，存在内存中，有值则不调用get_user_info
const XNetType = getUaValue('nt')
const XType = getUaValue('appType') || 1
export default async () => {
    const data = {
        'X-Ver': version, // app版本
        'X-Dt': isAndroid ? 't1' : isIOS ? 't2' : 't3', // 安卓：t1，ios：t2，其他：t3
        'X-Dev-Id': uuid, // 用户设备ID(uuid)
        'X-Net-Type': XNetType, // wiff：n1，2G：n2，3G：n3，4G：n4、5G：n5
        'X-Uid': XUid, // 用户ID,
        'X-Lang': langType, // string：1-简体(默认)，2-繁体，3-英语
        'X-Type': XType, // 1-大陆、2-香港
        'X-Dev-Info': 'h5'
    }
    try {
        if (domain.IS_LOCAL_DEV) {
            // 本地环境环境使用此uid测试
            // XUid = '318439107153240064'
            XUid = '414829439423279104'
            data['X-Uid'] = XUid
        }
        // 获取用户ID
        if (!data['X-Uid'] && isYouxinApp) {
            const user = await JSBridge.callApp('get_user_info')
            XUid = user.userId
        }
        data['X-Uid'] = XUid
        return data
    } catch (e) {
        return data
    }
}
