export const en = {
    title: 'Cash Flow',
    nodata: 'No Data',
    errorTips: 'Network error, please try again',
    noMore: 'No More',
    canUseCash: 'Available Cash',
    currencyType: 'Currency',
    timeRange: 'Time Range',
    customize: 'Customize',
    startTime: 'Start Date',
    endTime: 'End Date',
    to: 'to',
    cancel: 'Cancel',
    confirm: 'Confirm',
    all: 'All Dates',
    near1month: '1 Month',
    near3month: '3 Months',
    near1year: '1 Year',
    thisYear: 'This Year',
    // 日期选择器格式化
    daterangeFormat(type, value) {
        if (type === 'year') {
            return `${value}`
        } else if (type === 'month') {
            return `${value}`
        }
        return `${value}`
    },
    loosingText: 'Release to refresh...',
    pullingText: 'Pull to refresh...',
    loadingText: 'Loading...'
}
