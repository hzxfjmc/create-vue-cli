import { host } from '../../utils/host'
import { formatMockData } from '../../utils/util'
import Mock from 'mockjs'
// 获取当前客户债券持仓
const formatData = formatMockData({
    'bondPositionList|1-3': [
        {
            availableQuantity: /1\d{1,3}/,
            'bondId|1-12345678': 0,
            bondName: '@word(2,30)',
            costPrice: /0\.\d{2}/,
            currency: {
                'type|1-123456': 0,
                name: '@cword(2,4)'
            },
            frozenQuantity: /1\d{2,4}/,
            market: {
                'type|1-123456': 0,
                name: '@cword(2,4)'
            },
            marketValue: /0\.\d{2,4}/,
            positionQuantity: /1\d{2,3}/,
            price: /1\.\d{2.3}/,
            profit: /1\.\d{2.3}/,
            profitRatio: /2\.\d{2.3}/,
            totalProfit: /2\.\d{2.3}/,
            totalProfitRatio: /2\.\d{2.3}/
        }
    ],
    marketValue: /0\.\d{2,4}/,
    profit: /1\.\d{2.3}/,
    totalProfit: /2\.\d{2.3}/
})
let url = host + '/finance-server/api/get-bond-position/v1'
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
