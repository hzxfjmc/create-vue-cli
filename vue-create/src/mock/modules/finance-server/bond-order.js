import { host } from '../../utils/host'
import { formatMockData } from '../../utils/util'
import Mock from 'mockjs'
// 下单
const formatData = formatMockData({})
let url = host + '/finance-info-server/api/bond-order/v1'
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
