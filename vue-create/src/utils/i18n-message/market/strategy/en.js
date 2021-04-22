export const en = {
    nodata: 'No Data',
    errorTips: 'Network error, please try again',
    strategyIncomeTrend: 'Performance',
    riskWarning:
        'Risk Warning: The information provided by this function is generated based on intelligent algorithm, which is only for reference and do not constitute investment advice.',
    nameAndCode: 'Stock',
    operationPrice: 'Price',
    tipsIncome: 'Indicate the full cycle cumulative return of the stock',
    transferIn: 'Inclusion',
    transferOut: 'Exclusion',
    index(type) {
        const map = new Map([[1, 'Hang Seng Index'], [2, 'NASDAQ']])
        return map.get(type) || 'Unkown'
    },
    tipsCumulativeIncome:
        'Formula: Cumulative return / Current market value. Higher ratio represent greater profitability.',
    strategyReview: 'Strategy Evaluation',
    cumulativeIncome: 'Cumulative return',
    tipsWinningProbability:
        'Formula: Number of all selected stock which provide positive return / Number of all selected stocks. Higher rate represent higher probability to win.',
    winningProbability: 'Win Rate',
    currentStock: 'Short list',
    historyRecord: 'History',
    beSelectedPrice: 'Bought',
    newestPrice: 'Latest Price',
    beSelectedDate: 'Date',
    searchPlaceholder: 'Please enter the stock symbol / name',
    searchHistory: 'Search History',
    searchResult: 'Search Result',
    routeIndex: 'Strategy Details',
    noAccessBeforeUnlock: 'Please unlock to view',
    confirm: 'Confirm',
    cancel: 'Cancel',
    confirmClear: 'Confirm to clear history?',
    subscribe: '+Subscribe',
    subscribed: 'Subscribed',
    operationDirection: 'Direction',
    incomeRate: 'Return',
    strategy: 'Strategy',
    closeIncome(days) {
        return `Last ${days} Days`
    },
    branch(count) {
        return `${count} stock${count > 1 ? 's' : ''}`
    },
    unlock: 'Unlock',
    gotoUnlock: 'Unlock',
    skimInApp: 'Please check in uSMART App',
    pleaseLogin: 'Please login to access the content',
    pleaseOpenAccount: 'You need to open an account to access content',
    noStock: 'No recommended stock'
}
