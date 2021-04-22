import { host } from '../../utils/host'
import { formatMockData, comp } from '../../utils/util'
import Mock from 'mockjs'
// 债券列表
const formatData = formatMockData({
    'bondInfoAndCurrentPriceApiResponses|1-30': [
        {
            bondName: {
                en: '@word(2,30)',
                zhCn: '@cword(2,30)',
                zhHk: '@cword(2,30)'
            },
            logo: '',
            'dueTime|1564577990837-2564577990837': 0,
            'id|1-123456789': 0,
            paymentDates: '@word(2,8)',
            paymentFrequency: {
                name: '@cword(2, 10)',
                'type|1-10': 0
            },
            price: {
                'buyPrice|1': comp('@float(1,100,1,3)'),
                'buyYtm|1': comp(/\d{1}\.\d{2}%/),
                'sellPrice|1': comp('@float(1,100,1,3)'),
                'sellYtm|1': comp(/\d{1}\.\d{2}%/),
                'updateTime|1': comp('@integer(1564577990837,2564577990837)')
            },
            'tags|1': comp([
                {
                    'displayOrder|1-100': 0,
                    'id|1-123456789': 0,
                    name: {
                        en: '@word(2,8)',
                        zhCn: '@cword(2,8)',
                        zhHk: '@cword(2,8)'
                    }
                }
            ]),
            'issuerName|1': comp('@cword(1,18)'),
            'minFaceValue|1': comp('@integer(1,5000)'),
            'enumCurrency|1': comp('@word(1,10)'),
            'paymentAfterTaxPerYear|1': comp('@word(1,10)')
        }
    ],
    'pageNum|1-20': 1,
    'pageSize|1-100': 10,
    'total|1-100': 7
})
let url = host + '/finance-info-server/api/get-bond-list/v1'
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
