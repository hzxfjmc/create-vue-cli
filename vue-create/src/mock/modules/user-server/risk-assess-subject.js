import { host } from '../../utils/host'
import { formatMockData } from '../../utils/util'
import Mock from 'mockjs'
// 获取风险测评题目
const formatData = formatMockData({
    'subject|5-8': [
        {
            'num|1-100': 1,
            title: '@cword(6,15)',
            'option|5': [
                {
                    'num|1-5': 1,
                    text: '@cword(6,15)',
                    'score|1-5': 1
                }
            ]
        }
    ],
    'version|1-5': 1
})
let url = host + '/user-server/api/risk-assess-subject/v1'
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
