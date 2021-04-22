export const zhCHT = {
    common: {
        nodata: '暫無數據',
        errorTips: '網絡錯誤，請稍後再試',
        monthlyMoney: '月供金額',
        hkDollar: '港幣',
        autoSwap: '自動換匯',
        ended: '已結束',
        stopped: '已暫停',
        monthlyStock: '月供股票'
    },
    list: {
        createYg: '創建月供'
    },
    router: {
        create: '創建月供計劃',
        mine: '我的月供計劃',
        mineFinish: '已結束的月供計劃',
        detail: '月供計劃詳情',
        record: '月供明細',
        updateMonthlyPlan: '修改月供計劃'
    },
    index: {
        nearTrend: month => {
            const dateStr =
                month < 12 ? `${month}月` : `${Math.floor(month / 12)}年`
            return `近${dateStr}走勢`
        },
        nearChg: month => {
            const dateStr =
                month < 12 ? `${month}月` : `${Math.floor(month / 12)}年`
            return `近${dateStr}漲跌幅`
        },
        userChoose: '的用戶選擇',
        myMonthly: '我的月供',
        allMonthly: '全部月供股',
        notApp: '請在APP中訪問'
    },
    mine: {
        times: '(次)',
        checkEnding: '查看已結束的月供計劃'
    },
    edit: {
        canUseCash: '從賬戶可取現金扣除',
        createTips: '您可自行存入資金或通過銀行建立',
        autoTrans: '自動轉賬',
        notEnough: '當金額不足時，自動換匯',
        closeTo: '扣款後最臨近交易日',
        agree: '我已閱讀並同意',
        agreement: '“月供計劃協議”',
        postpone: '節假日順延',
        placehold(start, step) {
            return `${start}起，${step}遞增`
        },
        autoSwap_2:
            '扣款時，如果扣款貨幣(例如港幣)不足，差額部分將通過您其他貨幣(例如美元)的可取金額自動換匯補充，以避免扣款失敗。',
        autoSwap_3: '匯率將遵循換匯發生時APP的最新匯率',
        confirm: '確認',
        passwordError: '交易密碼錯誤',
        noticeGoToApp: '請前往APP創建月供計劃',
        noUpdate: '月供計劃沒有改動',
        systemError: '系統異常',
        daysPerMonth(count) {
            return `每月${count}日`
        },
        withholdDay: '扣款日',
        tradeDay: '交易日'
    },
    detail: {
        end: '結束',
        stop: '暫停',
        update: '修改',
        withholdTime: '扣款時間',
        nextTradeDate: '扣款後下1個交易日',
        buyTime: '買入時間',
        buyIn: '買入',
        startBuyIn: '開始買入',
        recover: '恢復',
        ygRecord: '月供記錄',
        ygInProgress: '月供進行中',
        accBuyCount: '累計買入股數',
        avgBuyPrice: '平均買入價格',
        confirmEndYg: '確認結束月供計劃嗎？',
        confirmEndYgTips:
            '月供股票適合長期投資，可以減少擇時選擇困難，平攤投資成本，省心省力，確認要結束月供計劃嗎？',
        confirmEnd: '確認結束',
        continueYg: '繼續月供',
        planEnded: '計劃已結束',
        planStopped: '計劃已暫停',
        planRecovered: '計劃已恢復',
        fail: '失敗',
        failReason(reason) {
            return `由於${reason}，交易延後進行`
        },
        noLater(date) {
            return `不晚於${date}`
        },
        openedTransfer: '已開啟自動換匯'
    },
    record: {
        status: '狀態',
        currency: '貨幣',
        deductCanUsed: '從可取現金扣款',
        sum: '金額',
        batchBuyIn: '分批次買入',
        dealAvgPrice: '成交均價',
        dealAccount: '成交數量',
        dealMoney: '成交金額',
        totalCost: '費用合計',
        fare1_hk: '印花税',
        fare9: '交收費',
        fare2_hk: '交易費',
        fare3_hk: '交易徵費',
        fare7: '系统使用费',
        fare1_us: '交收費',
        fare2_us: '證監會規費',
        fare3_us: '交易活動費',
        fare0: '佣金',
        fare6: '平台使用费',
        withhold: '扣款',
        method: '方式',
        trade: '交易',
        refund: '退款',
        strands: '股',
        deductStatusToText(status) {
            const map = new Map([
                [0, '扣款中'],
                [1, '扣款失敗'],
                [2, '扣款成功']
            ])
            return map.get(status) || '--'
        },
        dealStatusToText(status) {
            const map = new Map([[0, '交易成功'], [1, '交易失敗']])
            return map.get(status) || '--'
        },
        refundStatusToText(status) {
            const map = new Map([
                [0, '退款中'],
                [1, '退款失敗'],
                [2, '退款成功']
            ])
            return map.get(status) || '--'
        },
        success: '月供成功',
        fail: '月供失敗',
        partSuccess: '月供部分成功'
    },
    other: {
        yuan: '元',
        dollar: '美元',
        inForce: '生效中',
        nextWithholdTime: '下次扣款時間',
        startTradeTime: '開始交易時間',
        allDayBatchBuyIn: '全天分批次買入',
        withholdFail: '扣款失敗',
        times: '次',
        monthlySuccess: '成功月供',
        stock: '股票',
        withholdMethod: '扣款方式',
        cancel: '取消',
        nextWithhold: '下次扣款',
        dateFormat: 'MM月DD日'
    }
}
