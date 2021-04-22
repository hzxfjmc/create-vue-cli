import { host } from '../../utils/host'
import { formatMockData } from '../../utils/util'
import Mock from 'mockjs'
// 债券价格详情
const formatData = formatMockData({
    code: 0,
    msg: '成功',
    data: [
        {
            id: 2986,
            packageId: 6885,
            marketType: 5,
            currency: 2,
            entrustType: 2,
            feeCategory: 1,
            feeMode: 0,
            commissionDirection: ',0,1,',
            feeContent: '交易金额的0%',
            isDeleted: false,
            createName: 'xiecuiyun',
            createTime: '2019-07-26 06:36:22',
            updateName: null,
            updateTime: '2019-07-26 06:36:22',
            feeMethod: 1,
            feeLadders: [
                {
                    id: 4043,
                    itemId: 2986,
                    ladderStandard: null,
                    cycle: null,
                    ladderBegin: null,
                    ladderEnd: null,
                    feeMethod: 1,
                    feePercent: 0.15,
                    feeAmount: null,
                    minFeeAmount: 15,
                    maxFeeAmount: null,
                    minFeePercent: null,
                    maxFeePercent: null,
                    createTime: '2019-07-26 14:36:22',
                    updateTime: '2019-07-26 14:36:22',
                    ladderStandardName: null,
                    cycleName: null,
                    feeMethodName: 'Percent',
                    feeAmountName: ''
                }
            ],
            feeMethodName: 'Percent',
            marketTypeName: '美股',
            currencyName: '港币',
            entrustTypeName: '手机委托',
            feeCategoryName: '佣金',
            feeModeName: '标准'
        },
        {
            id: 2983,
            packageId: 6885,
            marketType: 5,
            currency: 2,
            entrustType: 1,
            feeCategory: 1,
            feeMode: 0,
            commissionDirection: ',0,1,',
            feeContent: '交易金额的0.1%,最高0港币,最低15港币',
            isDeleted: false,
            createName: 'xiecuiyun',
            createTime: '2019-07-26 06:36:22',
            updateName: null,
            updateTime: '2019-07-26 06:36:22',
            feeMethod: 1,
            feeLadders: [
                {
                    id: 4040,
                    itemId: 2983,
                    ladderStandard: null,
                    cycle: null,
                    ladderBegin: null,
                    ladderEnd: null,
                    feeMethod: 1,
                    feePercent: 0.1,
                    feeAmount: null,
                    minFeeAmount: 15,
                    maxFeeAmount: null,
                    minFeePercent: null,
                    maxFeePercent: null,
                    createTime: '2019-07-26 14:36:22',
                    updateTime: '2019-07-26 14:36:22',
                    ladderStandardName: null,
                    cycleName: null,
                    feeMethodName: 'Percent',
                    feeAmountName: ''
                }
            ],
            feeMethodName: 'Percent',
            marketTypeName: '美股',
            currencyName: '港币',
            entrustTypeName: '电话委托',
            feeCategoryName: '佣金',
            feeModeName: '标准'
        },
        {
            id: 2987,
            packageId: 6885,
            marketType: 5,
            currency: 2,
            entrustType: 2,
            feeCategory: 2,
            feeMode: 0,
            commissionDirection: ',0,1,',
            feeContent: '0.005港币/股,最低1.5港币/笔',
            isDeleted: false,
            createName: 'xiecuiyun',
            createTime: '2019-07-26 06:36:22',
            updateName: null,
            updateTime: '2019-07-26 06:36:22',
            feeMethod: 2,
            feeLadders: [
                {
                    id: 4044,
                    itemId: 2987,
                    ladderStandard: null,
                    cycle: null,
                    ladderBegin: null,
                    ladderEnd: null,
                    feeMethod: 2,
                    feePercent: null,
                    feeAmount: 10,
                    minFeeAmount: 10,
                    maxFeeAmount: null,
                    minFeePercent: null,
                    maxFeePercent: null,
                    createTime: '2019-07-26 14:36:22',
                    updateTime: '2019-07-26 14:36:22',
                    ladderStandardName: null,
                    cycleName: null,
                    feeMethodName: 'Amount',
                    feeAmountName: ''
                }
            ],
            feeMethodName: 'Amount',
            marketTypeName: '美股',
            currencyName: '港币',
            entrustTypeName: '手机委托',
            feeCategoryName: '平台使用费',
            feeModeName: '标准'
        },
        {
            id: 2984,
            packageId: 6885,
            marketType: 5,
            currency: 2,
            entrustType: 1,
            feeCategory: 2,
            feeMode: 0,
            commissionDirection: ',0,1,',
            feeContent: '',
            isDeleted: false,
            createName: 'xiecuiyun',
            createTime: '2019-07-26 06:36:22',
            updateName: null,
            updateTime: '2019-07-26 06:36:22',
            feeMethod: 2,
            feeLadders: [
                {
                    id: 4041,
                    itemId: 2984,
                    ladderStandard: null,
                    cycle: null,
                    ladderBegin: null,
                    ladderEnd: null,
                    feeMethod: 2,
                    feePercent: null,
                    feeAmount: 10,
                    minFeeAmount: 10,
                    maxFeeAmount: null,
                    minFeePercent: null,
                    maxFeePercent: null,
                    createTime: '2019-07-26 14:36:22',
                    updateTime: '2019-07-26 14:36:22',
                    ladderStandardName: null,
                    cycleName: null,
                    feeMethodName: 'Amount',
                    feeAmountName: ''
                }
            ],
            feeMethodName: 'Amount',
            marketTypeName: '美股',
            currencyName: '港币',
            entrustTypeName: '电话委托',
            feeCategoryName: '平台使用费',
            feeModeName: '标准'
        },
        {
            id: 2988,
            packageId: 6885,
            marketType: 5,
            currency: 2,
            entrustType: 2,
            feeCategory: 4,
            feeMode: 0,
            commissionDirection: ',0,1,',
            feeContent: '0.003港币/股,最低0.01港币/笔',
            isDeleted: false,
            createName: 'xiecuiyun',
            createTime: '2019-07-26 06:36:22',
            updateName: null,
            updateTime: '2019-07-26 06:36:22',
            feeMethod: 7,
            feeLadders: [
                {
                    id: 4045,
                    itemId: 2988,
                    ladderStandard: null,
                    cycle: null,
                    ladderBegin: null,
                    ladderEnd: null,
                    feeMethod: 7,
                    feePercent: null,
                    feeAmount: 0.00075,
                    minFeeAmount: null,
                    maxFeeAmount: 0.75,
                    minFeePercent: null,
                    maxFeePercent: null,
                    createTime: '2019-07-26 14:36:22',
                    updateTime: '2019-07-26 14:36:22',
                    ladderStandardName: null,
                    cycleName: null,
                    feeMethodName: 'Amount Per Qty',
                    feeAmountName: ''
                }
            ],
            feeMethodName: 'Amount Per Qty',
            marketTypeName: '美股',
            currencyName: '港币',
            entrustTypeName: '手机委托',
            feeCategoryName: null,
            feeModeName: '标准'
        },
        {
            id: 2985,
            packageId: 6885,
            marketType: 5,
            currency: 2,
            entrustType: 1,
            feeCategory: 4,
            feeMode: 0,
            commissionDirection: ',0,1,',
            feeContent: '0.003港币/股,最低0.01港币/笔',
            isDeleted: false,
            createName: 'xiecuiyun',
            createTime: '2019-07-26 06:36:22',
            updateName: null,
            updateTime: '2019-07-26 06:36:22',
            feeMethod: 7,
            feeLadders: [
                {
                    id: 4042,
                    itemId: 2985,
                    ladderStandard: null,
                    cycle: null,
                    ladderBegin: null,
                    ladderEnd: null,
                    feeMethod: 7,
                    feePercent: null,
                    feeAmount: 0.00075,
                    minFeeAmount: null,
                    maxFeeAmount: 0.75,
                    minFeePercent: null,
                    maxFeePercent: null,
                    createTime: '2019-07-26 14:36:22',
                    updateTime: '2019-07-26 14:36:22',
                    ladderStandardName: null,
                    cycleName: null,
                    feeMethodName: 'Amount Per Qty',
                    feeAmountName: ''
                }
            ],
            feeMethodName: 'Amount Per Qty',
            marketTypeName: '美股',
            currencyName: '港币',
            entrustTypeName: '电话委托',
            feeCategoryName: null,
            feeModeName: '标准'
        }
    ]
})
let url = host + '/product-server/api/fee_package_curr'
let method = 'post'
export default [
    url,
    method,
    // formatData
    function(options) {
        console.log('options:>>>', options)
        let data = Mock.mock(formatData)
        if (typeof data === 'string') {
            return data
        }
        if (data.code === 0 || data.code === 301400) {
            return data.data
        } else if (data.code === 300101) {
            // LS.remove('userToken')
            // 登录成功后刷新下页面 小概率事件 避免各种复杂情况
            // jsBridge.callApp('command_user_login').then(() => {
            //     window.location.reload()
            // })
            return Promise.reject({ code: data.code })
        } else {
            return Promise.reject(data)
        }
    },
    {
        url,
        method,
        formatData
    }
]
