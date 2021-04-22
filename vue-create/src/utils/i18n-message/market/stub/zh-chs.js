// 简体
export const zhCHS = {
    listCell: {
        title(num = 0) {
            return `推荐 ${num} 支`
        },
        nameCode: '名称代码',
        beginPrice: '入选价',
        suggest: '止盈',
        loss: '止损',
        stopProfit: '止盈',
        lossProfit: '止损',
        increase: '涨幅',
        maxIncrease: '最高涨幅',
        noneText: '今日无推荐股票',
        openPrice: '开盘价',
        noStock: '今日无推荐股票'
    },
    history: {
        title: '历史记录',
        noMore: '没有更多了',
        expire: '已过期'
    },
    detail: {
        title: '策略详情',
        period(day) {
            return `最优持股周期: ${day}天`
        },
        evaluate: '策略评测',
        evaluate_desc: [
            '平均涨幅：策略开始运行至今，所有入选股票涨幅平均值；',
            '年化：策略年化收益，已扣印花税；',
            '胜率：策略开始运行至今，正收益入选股票数 / 入选股票数；'
        ],
        averageMaxIncrease: '平均最高涨幅',
        averageIncrease: '平均涨幅',
        annual: '年化',
        winRate: '胜率',
        recommend: '最新推荐',
        history: '历史记录',
        getDescribe(x) {
            return `请放弃高开${x}以上的股票，切勿追高。`
        },
        tip:
            '风险提示：本页面提供的信息基于智能算法生成，仅供投资参考，不构成任何投资建议',
        lockText(index) {
            const arr = ['您当前暂无权限，请先登录', '您当前暂无权限，请先开户']
            return arr[index] || arr[0]
        },
        sub_text: '订阅',
        sub_text_cancel: '已订阅',
        subscribe_error: '订阅操作失败，请稍后重试',
        cancel: '取消',
        confirm: '确定',
        to_unlock: '去解锁',
        error_opt: '操作失败',
        unlock: '解锁'
    }
}
