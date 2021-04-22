export const zhCHT = {
    tips1: '資金預計一個交易日內存入您的賬戶',
    tips2: '獎勵將於3-5個交易日存入您的賬戶',
    tips3: '溫馨提示：新的佣金計劃預計第二天生效',
    tips4: '溫馨提示： 成功激活後，若報價未即時更新 請您退出app重新登入',
    tips5: '可到香港任意分行消費使用',
    conditionList: {
        1: '無',
        2: '首次入金',
        3: '累計入金',
        4: '單次入金',
        5: '首次交易',
        6: '累計交易',
        7: '單次交易',
        8: '完成開戶'
    },
    redemptionCode: '兌換碼',
    Usetips: '使用規則',
    expireDays: res => {
        if (res < 1) {
            return `今天後過期`
        }
        return `${res} 天後過期`
    },
    toBeUsed: '待使用',
    hasUsed: '已使用',
    hasExpire: '已失效',
    canNotReach: '卡券有效期內達成以下條件即可使用:',
    priceList: {
        0: '港股、美股報價',
        1: '港股lv2報價',
        2: '美股lv1報價'
    },
    quotation: '報價',
    pjredemptionCode: '憑藉兌換碼',
    imediUse: '立即使用',
    freecommission: '佣金特惠',
    firstConditonNo: '首次入金或者转仓金额没有达到使用条件',
    firstTradeNo: '首次交易金额没有达到使用条件',
    gotoCenter: '去活動中心看看',
    noCard: '没有卡券可用',
    noMore: '沒有更多了',
    noActivity: '暫無活動，敬請期待！',
    netError: '網絡開小差，請稍後重試',
    activityCenterTitle: '活動中心',
    awardCenterTitle: '獎品中心',
    rmbWithDraw: '現金券提現',
    noOpenAccout: '您還未開戶',
    openCanNext: '為保證賬戶安全，卡券需要您完成開戶後才可使用',
    goToOpen: '去開戶',
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
    confirmUseMessage: '(資金預計一個交易日內存入您的賬戶)',
    confirmUseMessage3: '使用後預計第二天完成切換',
    useDays: '使用期限:',
    ever: '永久',
    conditionOfUse: '使用条件:',
    share: '股',
    useSuccess: '使用成功!',
    stockUsed: '您的送股券已成功使用',
    stockTips:
        '您的卡券已成功使用, 股票將於3-5個交易日內存入您的賬戶,\n 感謝支持!',
    Processing: '分配中'
}
