export const en = {
    common: {
        nodata: 'No Data',
        errorTips: 'Network error, please try again',
        monthlyMoney: 'Monthly Investment Amount ',
        hkDollar: 'HKD',
        autoSwap: 'Auto Currency Exchange',
        ended: 'Ended',
        stopped: 'Stopped',
        monthlyStock: 'Monthly Invest'
    },
    list: {
        createYg: 'Create Plan'
    },
    router: {
        create: 'Create Plan',
        mine: 'My Plan',
        mineFinish: 'Ended Plan',
        detail: 'Plan Details',
        record: 'Investment Details',
        updateMonthlyPlan: 'Edit Plan'
    },
    index: {
        nearTrend: month => {
            const year = Math.floor(month / 12)
            const dateStr =
                month < 12
                    ? `${month > 1 ? month : ''} Month${month > 1 ? 's' : ''}`
                    : `${year > 1 ? year : ''} Year${year > 1 ? 's' : ''}`
            return `Past${dateStr} Performance`
        },
        nearChg: month => {
            const year = Math.floor(month / 12)
            const dateStr =
                month < 12
                    ? `${month > 1 ? month : ''} Month${month > 1 ? 's' : ''}`
                    : `${year > 1 ? year : ''} Year${year > 1 ? 's' : ''}`
            return `Past${dateStr} Performance`
        },
        userChoose: ` Users' Choice`,
        myMonthly: 'My Plan',
        allMonthly: 'All Eligible Stocks',
        notApp: 'Please Open in uSMART App'
    },
    mine: {
        times: '',
        checkEnding: 'View Ended Plan'
    },
    edit: {
        canUseCash: 'Debit from my account',
        createTips: 'You can deposit or setup bank',
        autoTrans: ' autopay',
        notEnough:
            'Automatically exchange currency if the debiting currency is insufficient',
        closeTo: 'Nearest trading day after debit',
        agree: 'I have read and agreed',
        agreement: '"Monthly Stocks Investment Plan Agreement"',
        postpone: 'To be postponed in case of holidays',
        placehold(start, step) {
            return `Mini: ${start}, Increment: ${step}`
        },
        autoSwap_2:
            'If the debiting currency (such as Hong Kong dollars) is insufficient, the difference will be automatically replenished by the amount of the other currency (such as US dollars) to avoid the failure of the payment.',
        autoSwap_3:
            'The actual exchange rates will be determined by uSMART at the time of transaction.',
        confirm: 'Confirm',
        passwordError: 'Transaction password is wrong',
        noticeGoToApp: 'Create plan in uSMART App',
        noUpdate: 'Plan has not changed',
        systemError: 'System error',
        daysPerMonth(count) {
            return `${count}th of each month`
        },
        withholdDay: 'Day of debit',
        tradeDay: 'Day of purchase'
    },
    detail: {
        end: 'End',
        stop: 'Stop',
        update: 'Edit',
        withholdTime: 'Time of debit',
        nextTradeDate: 'Nearest trading day after debit',
        buyTime: 'Time of purchase',
        buyIn: 'Purchase',
        startBuyIn: 'Start Purchase',
        recover: 'Resume',
        ygRecord: 'Records',
        ygInProgress: 'Executing',
        accBuyCount: 'Total shares bought',
        avgBuyPrice: 'Average cost per share',
        confirmEndYg: 'Confirm to end the plan?',
        confirmEndYgTips:
            'Monthly Stocks Investment Plan is suitable for long-term investment. You can take advantage of Dollar-Cost Averaging. Confirm to end the plan?',
        confirmEnd: 'Confirm',
        continueYg: 'No',
        planEnded: 'Plan Ended',
        planStopped: 'Plan Stopped',
        planRecovered: 'Plan Resumed',
        fail: 'Failed',
        failReason(reason) {
            return `Transaction delayed due to ${reason}`
        },
        noLater(date) {
            return `Not later than ${date}`
        },
        openedTransfer: 'Turned on auto currency  exchange'
    },
    record: {
        status: 'Status',
        currency: 'Currency',
        deductCanUsed: 'Debit from my withdrawable cash',
        sum: 'Amount',
        batchBuyIn: 'Purchase in batches',
        dealAvgPrice: 'Average Price',
        dealAccount: 'Purchased Quantity',
        dealMoney: 'Invested Amount',
        totalCost: 'Total Fee',
        fare1_hk: 'Stamp Duty',
        fare9: 'Stock Clearing Fee',
        fare2_hk: 'Trading Fee',
        fare3_hk: 'Transaction Levy',
        fare7: 'Trading Tariff',
        fare1_us: 'Stock Clearing Fee',
        fare2_us: 'SEC Fee',
        fare3_us: 'Trading Activity Fee',
        fare0: 'Commission',
        fare6: 'Platform Usage Fee',
        withhold: 'Debit',
        method: 'Method',
        trade: 'Transaction',
        refund: 'Refund',
        strands: ' Shares',
        deductStatusToText(status) {
            const map = new Map([
                [0, 'Debiting'],
                [1, 'Debit Failed'],
                [2, 'Debit Successful']
            ])
            return map.get(status) || '--'
        },
        dealStatusToText(status) {
            const map = new Map([
                [0, 'Debit Successful'],
                [1, 'Transaction Failed']
            ])
            return map.get(status) || '--'
        },
        refundStatusToText(status) {
            const map = new Map([
                [0, 'Refunding'],
                [1, 'Refund Failed'],
                [2, 'Refund Successful']
            ])
            return map.get(status) || '--'
        },
        success: 'Success',
        fail: 'Failed',
        partSuccess: 'Partial Success'
    },
    other: {
        yuan: 'yuan',
        dollar: 'USD',
        inForce: 'Active',
        nextWithholdTime: 'Next Debit Time',
        startTradeTime: 'Transaction Start Time',
        allDayBatchBuyIn: 'Purchase in batches',
        withholdFail: 'Refund Failed',
        times: ' Times',
        monthlySuccess: 'Investment',
        stock: 'Stock',
        withholdMethod: 'Debit Method',
        cancel: 'Cancel',
        nextWithhold: 'Next Debit Date',
        dateFormat: 'MM-DD'
    }
}
