export const zhCHS = {
    title: '资金流水',
    nodata: '暂无数据',
    errorTips: '网络开小差了，请稍后重试',
    noMore: '没有更多了',
    canUseCash: '可用现金',
    currencyType: '货币类型',
    timeRange: '时间范围',
    customize: '自定义',
    startTime: '开始时间',
    endTime: '结束时间',
    to: '至',
    cancel: '取消',
    confirm: '确定',
    all: '全部日期',
    near1month: '近1个月',
    near3month: '近3个月',
    near1year: '近1年',
    thisYear: '今年内',
    // 日期选择器格式化
    daterangeFormat(type, value) {
        if (type === 'year') {
            return `${value}年`
        } else if (type === 'month') {
            return `${value}月`
        }
        return `${value}日`
    },
    loosingText: '释放即可刷新...',
    pullingText: '下拉即可加载...',
    loadingText: '加载中...'
}
