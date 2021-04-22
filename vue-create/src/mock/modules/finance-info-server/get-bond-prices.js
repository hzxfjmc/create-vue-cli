import { host } from '../../utils/host'
import { formatMockData } from '../../utils/util'
import Mock from 'mockjs'
// 债券价格详情
const formatData = formatMockData({
    bondDetailPriceInfo: {
        'buyPrice|1-100.3': 1,
        buyYtm: /\d{1}\.\d{2}%/,
        'sellPrice|1-100.3': 1,
        sellYtm: /\d{1}\.\d{2}%/,
        'updateTime|1564577990837-2564577990837': 0
    },
    'bondPrices|1-3': [
        {
            'buyPrice|1-100.3': 1,
            buyYtm: /\d{1}\.\d{2}%/,
            'sellPrice|1-100.3': 1,
            sellYtm: /\d{1}\.\d{2}%/,
            'updateTime|1564577990837-2564577990837': 0
        }
    ]
})
let url = host + '/finance-info-server/api/get-bond-prices/v1'
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
