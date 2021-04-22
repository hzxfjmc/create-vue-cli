import { host } from '../../utils/host'
import { formatMockData } from '../../utils/util'
import Mock from 'mockjs'
// 债券价格详情
const formatData = formatMockData({
    'url|0-4': ['@url(http)']
})
let url = host + '/finance-info-server/api/get-bond-banner/v1'
let method = 'get'
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
