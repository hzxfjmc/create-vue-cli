import { ENV } from '../DOMAIN'
import { getUaValue } from '@/utils/html-utils'
import BJ_REPORT from 'badjs-report'

const config = {
    LOCAL: {
        id: 13,
        url: 'http://10.55.4.9:22227/badjs'
    },
    DEV: {
        id: 14,
        url: 'http://10.55.4.9:22227/badjs'
    },
    SIT: {
        id: 15,
        url: 'http://10.55.4.9:22227/badjs'
    },
    UAT: {
        id: 16,
        url: 'http://10.55.4.9:22227/badjs'
    },
    // todo：生产环境待部署
    PRO: {
        id: 16,
        url: 'http://10.55.4.9:22227/badjs'
    }
}
const options = {
    ignore: [/script error/i, /window.h5HistoryBack is not a function/],
    uin: getUaValue('uuid')
}
BJ_REPORT.init({ ...options, ...config[ENV] })
