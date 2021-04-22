import { host } from '../../utils/host'
import { formatMockData, comp } from '../../utils/util'
import Mock from 'mockjs'
// 债券信息详情
const formatData = formatMockData({
    'id|1-123456789': 0,
    bondEditableInfo: {
        nameCn: '@cword(1, 30)',
        nameEn: '@word(1, 30)',
        nameHk: '@cword(1, 30)',
        creditRating: {
            agency: '@cword(2, 6)',
            rank: /A{1,5}/
        },
        logo: '',
        productOverview: '@url(http)',
        raiseManual: '@url(http)',
        'isDisplay|1': true,
        'displayOrder|1-100': 0,
        'isTop|1': true,
        riskLevel: {
            'type|1-10': 0,
            name: '@cword(2, 6)'
        },
        bindStock: {
            stockCode: /\d{6}/,
            stockMarket: {
                name: '@cword(2, 6)',
                'type|1-10': 0
            }
        },
        'tags|1': comp([
            {
                'displayOrder|1-100': 0,
                name: {
                    en: '@word(2,8)',
                    zhCn: '@cword(2,8)',
                    zhHk: '@cword(2,8)'
                },
                'id|1-123456789': 0
            }
        ]),
        issuer: {
            'id|1-123456789': 1,
            rankInfo: {
                agency: '@cword(2, 6)',
                rank: /A{1,5}/,
                'creditRatingId|1-123456789': 1
            },
            name: '@cword(2,4)',
            nameHK: '@cword(2,4)',
            nameEn: '@word(2,4)'
        }
    },
    bondUneditableInfo: {
        'minFaceValue|100-5000': 0,
        couponRate: /0\.0\d{3}/,
        code: /\w\d{1,6}/,
        'issueTime|1564577990837-2564577990837': 0,
        'dueTime|1564577990837-2564577990837': 0,
        enumCodeType: {
            'type|1-10': 0,
            name: '@word(2, 6)'
        },
        enumPaymentType: {
            'type|1-10': 0,
            name: '@cword(2, 6)'
        },
        enumPaymentFrequency: {
            'type|1-10': 0,
            name: '@cword(2, 6)'
        },
        enumDelivery: {
            'type|1-10': 0,
            name: '@word(2, 6)'
        },
        enumInterestBenchmark: {
            'type|1-10': 0,
            name: '@word(2, 6)'
        },
        enumCurrency: {
            'type|1-10': 0,
            name: '@cword(2, 6)'
        },
        paymentDate: '@word(2,8)'
    },
    currentPrice: {
        'buyPrice|1-100.3': 1,
        buyYtm: /\d{1}\.\d{2}%/,
        'sellPrice|1-100.3': 1,
        sellYtm: /\d{1}\.\d{2}%/,
        'updateTime|1564577990837-2564577990837': 0
    },
    'prices|50-80': [
        {
            'buyPrice|1-100.3': 1,
            buyYtm: /\d{1}\.\d{2}/,
            'sellPrice|1-100.3': 1,
            sellYtm: /\d{1}\.\d{2}/,
            'updateTime|1564577990837-2564577990837': 0
        }
    ]
})
let url = host + '/finance-info-server/api/get-bond-detail/v1'
let method = 'post'
export default [
    url,
    method,
    // formatData
    function(options) {
        console.log('options:>>>', options)
        return Mock.mock(formatData)
    },
    {
        url,
        method,
        formatData
    }
]
