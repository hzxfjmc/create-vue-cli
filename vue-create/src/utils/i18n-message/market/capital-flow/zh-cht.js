export const zhCHT = {
    title: '資金流水',
    nodata: '暫無數據',
    errorTips: '網絡錯誤，請稍後再試',
    noMore: '沒有更多了',
    canUseCash: '可用現金',
    currencyType: '貨幣類型',
    timeRange: '時間範圍',
    customize: '自定義',
    startTime: '開始時間',
    endTime: '結束時間',
    to: '至',
    cancel: '取消',
    confirm: '確定',
    all: '全部日期',
    near1month: '近1個月',
    near3month: '近3個月',
    near1year: '近1年',
    thisYear: '今年內',
    // 日期选择器格式化
    daterangeFormat(type, value) {
        if (type === 'year') {
            return `${value}年`
        } else if (type === 'month') {
            return `${value}月`
        }
        return `${value}日`
    },
    loosingText: '釋放即可刷新...',
    pullingText: '下拉即可加載...',
    loadingText: '加載中...'
}
