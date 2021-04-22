import { host } from '../../utils/host'
import { formatMockData } from '../../utils/util'
import Mock from 'mockjs'
// 债券风险提示签名
const formatData = formatMockData({
    protocolName: '@cword(5,8)',
    protocolUrl: '@url(http)'
})
let url =
    host + '/config-manager/api/select-protocol-info/v1?serviceCode=BOND001'
let method = 'post'
export default [
    url,
    method,
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
