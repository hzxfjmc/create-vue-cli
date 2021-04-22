export const zhCHS = {
    nodata: '暂无数据',
    errorTips: '网络开小差了，请稍后重试',
    strategyIncomeTrend: '策略收益趋势',
    riskWarning:
        '风险提示：本页面提供的信息基于智能算法生成，仅供投资参考，不构成任何投资建议',
    nameAndCode: '名称代码',
    operationPrice: '操作价',
    tipsIncome: '表示某只股票完整周期的累计收益率（调入至调出为1个完整周期）',
    transferIn: '调入',
    transferOut: '调出',
    index(type) {
        const map = new Map([[1, '恒生指数'], [2, '纳斯达克']])
        return map.get(type) || '未知'
    },
    tipsCumulativeIncome:
        '表示策略建立至今全部入选股票累计收益与当前总市值比例，收益率越大策略盈利能力越強。',
    strategyReview: '策略评测',
    cumulativeIncome: '累计收益率',
    tipsWinningProbability:
        '表示盈利的开闭仓次数与完整的开闭仓次数的比例，胜率越大策略盈利机会越大。',
    winningProbability: '胜率',
    currentStock: '当前推荐',
    historyRecord: '历史记录',
    beSelectedPrice: '入选价',
    newestPrice: '最新价',
    beSelectedDate: '入选日期',
    searchPlaceholder: '请输入股票代码/名称',
    searchHistory: '搜索历史',
    searchResult: '搜索结果',
    routeIndex: '策略详情',
    noAccessBeforeUnlock: '暂无法查看，请先解锁',
    confirm: '确定',
    cancel: '取消',
    confirmClear: '确定清除历史记录吗？',
    subscribe: '+订阅',
    subscribed: '已订阅',
    operationDirection: '操作方向',
    incomeRate: '收益率',
    strategy: '策略',
    closeIncome(days) {
        return `近${days}天收益率`
    },
    branch(count) {
        return `${count}支`
    },
    unlock: '解锁',
    gotoUnlock: '去解锁',
    skimInApp: '请在APP中查看',
    pleaseLogin: '您当前暂无权限，请先登录',
    pleaseOpenAccount: '您当前暂无权限，请先开户',
    noStock: '今日无推荐股票'
}
