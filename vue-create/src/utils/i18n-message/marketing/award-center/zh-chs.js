export const zhCHS = {
    tips1: '资金预计一个交易日内存入您的账户',
    tips2: '奖励将于3-5个交易日存入您的账户',
    tips3: '温馨提示：新的佣金计划预计第二天生效',
    tips4: '温馨提示： 成功激活后，若行情未即时更新 请您退出app重新登录',
    tips5: '可到香港任意门店消费使用',
    conditionList: {
        1: '无',
        2: '首次入金',
        3: '累计入金',
        4: '单次入金',
        5: '首次交易',
        6: '累计交易',
        7: '单次交易',
        8: '完成开户'
    },
    redemptionCode: '兑换码',
    Usetips: '使用提示说明',
    expireDays: res => {
        if (res < 1) {
            return `今天后过期`
        }
        return `${res} 天后过期`
    },
    toBeUsed: '待使用',
    hasUsed: '已使用',
    hasExpire: '已失效',
    noMore: '没有更多了',
    noActivity: '暂无活动，敬请期待！',
    netError: '网络开小差了,请稍后重试',
    canNotReach: '卡券有效期内达成以下条件即可使用:',
    priceList: {
        0: '港股、美股行情',
        1: '港股lv2行情',
        2: '美股lv1行情'
    },
    quotation: '行情',
    pjredemptionCode: '凭借兑换码',
    imediUse: '立即使用',
    freecommission: '免交易佣金',
    firstConditonNo: '首次入金或者转仓金额没有达到使用条件',
    firstTradeNo: '首次交易金额没有达到使用条件',
    gotoCenter: '去活动中心看看',
    noCard: '没有卡券了',
    activityCenterTitle: '活动中心',
    awardCenterTitle: '奖励中心',
    rmbWithDraw: '现金券提现',
    noOpenAccout: '您还未开户',
    openCanNext: '为保证账户安全，卡券需要您完成开户后才可使用',
    goToOpen: '去开户',
    goToGold: '去入金',
    goToTrade: '去交易',
    cancel: '取消',
    failureReason: '失效原因',
    iKnow: '我知道了',
    month: '月',
    day: '天',
    ok: '好的',
    marketList: {
        0: '港股',
        1: '港股',
        2: '美股'
    },
    confirmUseTitle: res => {
        return `是否使用${res}`
    },
    confirmUseMessage: '(资金预计一个交易日内存入您的账户)',
    confirmUseMessage3: '使用后预计第二天完成切换',
    useDays: '使用期限:',
    ever: '永久',
    conditionOfUse: '使用条件:',
    share: '股',
    useSuccess: '使用成功!',
    stockUsed: '您的送股券已成功使用',
    stockTips: '预计于3-5个交易日内存入您的账户\n 感谢支持！',
    Processing: '分配中'
}
