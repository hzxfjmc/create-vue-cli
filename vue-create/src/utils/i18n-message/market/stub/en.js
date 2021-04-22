// 英文
export const en = {
    listCell: {
        title(num = 0) {
            return `Recommended ${num} stock${num > 1 ? 's' : ''}`
        },
        nameCode: 'Stock',
        beginPrice: 'Bought',
        // suggest: 'Take-Profit',
        suggest: 'TP',
        // loss: 'Stop-Loss',
        loss: 'SL',
        stopProfit: 'take profit',
        lossProfit: 'stop loss',
        increase: 'Return',
        // maxIncrease: 'Highest Return',
        maxIncrease: 'H-Return',
        noneText: 'No recommended stock',
        openPrice: 'Opening price',
        noStock: 'No recommended stock'
    },
    history: {
        title: 'History',
        noMore: 'No More',
        expire: 'Expired'
    },
    detail: {
        title: 'Strategy Details',
        period(day) {
            return `Optimal Holding Period: ${day} day${day > 1 ? 's' : ''}`
        },
        evaluate: 'Strategy Evaluation',
        evaluate_desc: [
            'Average Return: The average Return of all selected stocks since the strategy started running.',
            'Annualized: Returns over a period scaled down to a 12-month period,stamp duty deducted.',
            'Win Rate: Number of all selected stock which provide positive return / Number of all selected stocks.'
        ],
        averageMaxIncrease: 'Average Highest Return',
        averageIncrease: 'Average Return',
        annual: 'Annualized',
        winRate: 'Win Rate',
        recommend: 'Latest Recommendation',
        history: 'History',
        getDescribe(x) {
            return `Please don't trade the stock which up more than ${x} at opening.`
        },
        tip:
            'Risk Warning: The information provided by this function is generated based on intelligent algorithm, which is only for reference and do not constitute investment advice.',
        lockText(index) {
            const arr = [
                'Please login to access the content',
                'You need to open an account to access content'
            ]
            return arr[index] || arr[0]
        },
        sub_text: 'Subscribe',
        sub_text_cancel: 'Subscribed',
        subscribe_error: 'Subscription failed, please try again',
        to_unlock: 'Unlock',
        cancel: 'Cancel',
        confirm: 'Confirm',
        error_opt: 'Failed to process',
        unlock: 'Unlock'
    }
}
