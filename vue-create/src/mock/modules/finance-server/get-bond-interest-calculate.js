import { host } from '../../utils/host'
import { formatMockData } from '../../utils/util'
import Mock from 'mockjs'
// 获取应计利息计算值
const formatData = formatMockData({
    'interestDays|1-100': 0
})
let url = host + '/finance-server/api/bond-order/v1'
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
