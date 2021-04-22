import jsBridge from '@/utils/js-bridge.js'
import { cfgProSelect } from '@/service/config-manager.js'
import { Toast } from 'vant'
import { goPdfPreview } from './tools.js'
import { getCosUrl } from './cos-utils'
export const goPdfPreviewByArgid = async argid => {
    try {
        let url = await cfgProSelect(argid)
        if (url.indexOf('.pdf') > -1) {
            url = await getCosUrl(url)
            goPdfPreview(url)
        } else {
            jsBridge.gotoNewWebview(url)
        }
    } catch (e) {
        Toast(e.msg)
    }
}
