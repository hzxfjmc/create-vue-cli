export const zhCHT = {
    nodata: '暫無數據',
    errorTips: '網絡錯誤，請稍後再試',
    strategyIncomeTrend: '策略收益趨勢',
    riskWarning:
        '風險提示：本頁面提供的信息基於智能算法生成，僅供投資參考，不構成任何投資建議',
    nameAndCode: '名稱代碼',
    operationPrice: '操作價',
    tipsIncome: '表示某隻股票完整週期的累計收益率（調入至調出為1個完整週期）',
    transferIn: '調入',
    transferOut: '調出',
    index(type) {
        const map = new Map([[1, '恆生指數'], [2, '納斯達克']])
        return map.get(type) || '未知'
    },
    tipsCumulativeIncome:
        '表示策略建立至今全部入選股票累計收益與當前總市值比例，收益率越大策略盈利能力越強。',
    strategyReview: '策略評測',
    cumulativeIncome: '累計收益率',
    tipsWinningProbability:
        '表示盈利的開閉倉次數與完整的開閉倉次數的比例，勝率越大策略盈利機會越大',
    winningProbability: '勝率',
    currentStock: '當前推薦',
    historyRecord: '歷史記錄',
    beSelectedPrice: '入選價',
    newestPrice: '最新價',
    beSelectedDate: '入選日期',
    searchPlaceholder: '請輸入股票代碼/名稱',
    searchHistory: '搜索歷史',
    searchResult: '搜索結果',
    routeIndex: '策略詳情',
    noAccessBeforeUnlock: '暫無法查看，請先解鎖',
    confirm: '確定',
    cancel: '取消',
    confirmClear: '確定清除歷史記錄嗎？',
    subscribe: '+訂閱',
    subscribed: '已訂閱',
    operationDirection: '操作方向',
    incomeRate: '收益率',
    strategy: '策略',
    closeIncome(days) {
        return `近${days}天收益率`
    },
    branch(count) {
        return `${count}隻`
    },
    unlock: '解鎖',
    gotoUnlock: '去解鎖',
    skimInApp: '請在APP中查看',
    pleaseLogin: '您當前暫無權限，請先登入',
    pleaseOpenAccount: '您當前暫無權限，請先開戶',
    noStock: '今日無推薦股票'
}
