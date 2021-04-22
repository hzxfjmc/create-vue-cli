// 繁体
export const zhCHT = {
    listCell: {
        title(num = 0) {
            return `推薦 ${num} 隻`
        },
        nameCode: '名稱代碼',
        beginPrice: '入選價',
        suggest: '止賺',
        loss: '止損',
        stopProfit: '止賺',
        lossProfit: '止損',
        increase: '漲幅',
        maxIncrease: '最高漲幅',
        noneText: '今日無推薦股票',
        openPrice: '開盤價',
        noStock: '今日無推薦股票'
    },
    history: {
        title: '歷史紀錄',
        noMore: '沒有更多了',
        expire: '已過期'
    },
    detail: {
        title: '策略詳情',
        period(day) {
            return `最優持股週期: ${day}天`
        },
        evaluate: '策略評測',
        evaluate_desc: [
            '平均漲幅：策略開始運行至今，所有入選股票漲幅平均值；',
            '年化：策略年化收益，已扣印花稅；',
            '勝率：策略開始運行至今，正收益入選股票數 / 入選股票數；'
        ],
        averageMaxIncrease: '平均最高涨幅',
        averageIncrease: '平均漲幅',
        annual: '年化',
        winRate: '勝率',
        recommend: '最新推薦',
        history: '歷史紀錄',
        getDescribe(x) {
            return `請放棄高開${x}以上的股票，切勿追高。`
        },
        tip:
            '風險提示：本頁面提供的信息基於智能算法生成，僅供投資參考，不構成任何投資建議',
        lockText(index) {
            const arr = ['您當前暫無權限，請先登入', '您當前暫無權限，請先開戶']
            return arr[index] || arr[0]
        },
        sub_text: '訂閱',
        sub_text_cancel: '已訂閱',
        subscribe_error: '訂閱操作失敗，請稍後重試',
        cancel: '取消',
        confirm: '確定',
        to_unlock: '去解鎖',
        error_opt: '操作失敗',
        unlock: '解鎖'
    }
}
