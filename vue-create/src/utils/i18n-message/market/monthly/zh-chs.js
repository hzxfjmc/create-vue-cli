export const zhCHS = {
    common: {
        nodata: '暂无数据',
        errorTips: '网络开小差了，请稍后重试',
        monthlyMoney: '月供金额',
        hkDollar: '港币',
        autoSwap: '自动换汇',
        ended: '已结束',
        stopped: '已暂停',
        monthlyStock: '月供股票'
    },
    list: {
        createYg: '创建月供'
    },
    router: {
        create: '创建月供计划',
        mine: '我的月供计划',
        mineFinish: '已结束的月供计划',
        detail: '月供计划详情',
        record: '月供明细',
        updateMonthlyPlan: '修改月供计划'
    },
    index: {
        nearTrend: month => {
            const dateStr =
                month < 12 ? `${month}月` : `${Math.floor(month / 12)}年`
            return `近${dateStr}走势`
        },
        nearChg: month => {
            const dateStr =
                month < 12 ? `${month}月` : `${Math.floor(month / 12)}年`
            return `近${dateStr}涨跌幅`
        },
        userChoose: '的用户选择',
        myMonthly: '我的月供',
        allMonthly: '全部月供股',
        notApp: '请在APP中访问'
    },
    mine: {
        times: '(次)',
        checkEnding: '查看已结束的月供计划'
    },
    edit: {
        canUseCash: '从账户可取现金扣除',
        createTips: '您可自行存入资金或通过银行建立',
        autoTrans: '自动转账',
        notEnough: '当金额不足时，自动换汇',
        closeTo: '扣款后最临近交易日',
        agree: '我已阅读并同意',
        agreement: '“月供计划协议”',
        postpone: '节假日顺延',
        placehold(start, step) {
            return `${start}起，${step}递增`
        },
        autoSwap_2:
            '扣款时，如果扣款货币(例如港币)不足，差额部分将通过您其他货币(例如美元)的可取金额自动换汇补充，以避免扣款失败。',
        autoSwap_3: '汇率将遵循换汇发生时APP的最新汇率',
        confirm: '确认',
        passwordError: '交易密码错误',
        noticeGoToApp: '请前往APP创建月供计划',
        noUpdate: '月供计划没有改动',
        systemError: '系统异常',
        daysPerMonth(count) {
            return `每月${count}日`
        },
        withholdDay: '扣款日',
        tradeDay: '交易日'
    },
    detail: {
        end: '结束',
        stop: '暂停',
        update: '修改',
        withholdTime: '扣款时间',
        nextTradeDate: '扣款后下1个交易日',
        buyTime: '买入时间',
        buyIn: '买入',
        startBuyIn: '开始买入',
        recover: '恢复',
        ygRecord: '月供记录',
        ygInProgress: '月供进行中',
        accBuyCount: '累计买入股数',
        avgBuyPrice: '平均买入价格',
        confirmEndYg: '确认结束月供计划吗？',
        confirmEndYgTips:
            '月供股票适合长期投资，可以减少择时选择困难，平摊投资成本，省心省力，确认要结束月供计划吗？',
        confirmEnd: '确认结束',
        continueYg: '继续月供',
        planEnded: '计划已结束',
        planStopped: '计划已暂停',
        planRecovered: '计划已恢复',
        fail: '失败',
        failReason(reason) {
            return `由于${reason}，交易延后进行`
        },
        noLater(date) {
            return `不晚于${date}`
        },
        openedTransfer: '已开启自动换汇'
    },
    record: {
        status: '状态',
        currency: '货币',
        deductCanUsed: '从可取现金扣款',
        sum: '金额',
        batchBuyIn: '分批次买入',
        dealAvgPrice: '成交均价',
        dealAccount: '成交数量',
        dealMoney: '成交金额',
        totalCost: '费用合计',
        fare1_hk: '印花税',
        fare9: '交收费',
        fare2_hk: '交易费',
        fare3_hk: '交易徵费',
        fare7: '系统使用费',
        fare1_us: '交收费',
        fare2_us: '证监会规费',
        fare3_us: '交易活动费',
        fare0: '佣金',
        fare6: '平台使用费',
        withhold: '扣款',
        method: '方式',
        trade: '交易',
        refund: '退款',
        strands: '股',
        deductStatusToText(status) {
            const map = new Map([
                [0, '扣款中'],
                [1, '扣款失败'],
                [2, '扣款成功']
            ])
            return map.get(status) || '--'
        },
        dealStatusToText(status) {
            const map = new Map([[0, '交易成功'], [1, '交易失败']])
            return map.get(status) || '--'
        },
        refundStatusToText(status) {
            const map = new Map([
                [0, '退款中'],
                [1, '退款失败'],
                [2, '退款成功']
            ])
            return map.get(status) || '--'
        },
        success: '月供成功',
        fail: '月供失败',
        partSuccess: '月供部分成功'
    },
    other: {
        yuan: '元',
        dollar: '美元',
        inForce: '生效中',
        nextWithholdTime: '下次扣款时间',
        startTradeTime: '开始交易时间',
        allDayBatchBuyIn: '全天分批次买入',
        withholdFail: '扣款失败',
        times: '次',
        monthlySuccess: '成功月供',
        stock: '股票',
        withholdMethod: '扣款方式',
        cancel: '取消',
        nextWithhold: '下次扣款',
        dateFormat: 'MM月DD日'
    }
}
