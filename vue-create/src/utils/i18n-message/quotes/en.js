export const en = {
    index: {
        common: {
            Hk: 'HK Stock',
            Us: 'US Stock'
        },
        title: 'My Quotation',
        videoTitle: 'What is Advanced Quotation?',
        card: {
            contentHk: 'HK Stock Quotation',
            contentUs: 'US Stock Quotation',
            noLogin: {
                title: 'Delayed Quotation',
                buttonText: 'Login to Upgrade'
            },
            noBindPhone: {
                title: 'Delayed Quotation',
                buttonText: 'Upgrade'
            },
            bmp: {
                title: 'BMP Service',
                buttonText: 'Free Upgrade',
                extraButtonText: 'Buy Advanced Quotation'
            },
            chLv2: {
                title: 'LV2 Advanced Quotation',
                tip: '（Applicable in Mainland China）',
                expireTime: dateStr => `Expiry Date：${dateStr}`,
                buttonText: 'Free Renewal'
            },
            worldLv2Free: {
                title: 'LV2 Advanced Quotation',
                tip: '（Applicable Globally）',
                expireTime: dateStr => `Expiry Date：${dateStr}`,
                extraButtonText: 'Renew Advanced Quotation'
            },
            worldLv2Buy: {
                title: 'LV2 Advanced Quotation',
                tip: '（Applicable Globally）',
                expireTime: dateStr => `Expiry Date：${dateStr}`,
                extraButtonText: 'Renew Advanced Quotation'
            },
            bmpHk: {
                title: 'BMP Service',
                buttonText: 'Free Upgrade',
                extraButtonText: 'Buy Advanced Quotation'
            },
            worldHk: {
                title: 'LV2 Advanced Quotation',
                tip: '（Applicable Globally）',
                expireTime: dateStr => `Expiry Date：${dateStr}`,
                buttonText: 'Free Renewal',
                extraButtonText: 'Renew Advanced Quotation'
            },
            usLv1: {
                title: 'LV1 Advanced Quotation',
                expireTime: dateStr => `Expiry Date：${dateStr}`,
                buttonText: 'Free Renewal'
            },
            noUsLv1: {
                title: 'Delayed Quotation',
                buttonText: 'Free Upgrade'
            }
        },
        tableTitleHk: 'About HK Stock Advanced Quotation',
        tableTitleUs: 'About US Stock Advanced Quotation',
        tableContentHk: [
            ['', 'Delayed Quotation', 'BMP Service', 'LV2 Advanced Quotation'],
            [
                'Quotation',
                'Delayed Refresh',
                'Manual Refresh',
                'Real-Time Refresh'
            ],
            ['Market Depth', '/', '/', '10 Level'],
            ['Transaction Record', '/', '/', 'Provided'],
            ['Broker Queue', '/', '/', 'Provided'],
            [
                'Industries Performance',
                'Delayed Ranking',
                'Delayed Ranking',
                'Provided'
            ],
            ['Watchlist', 'All Stocks', '20 Stocks', 'All Stocks'],
            [
                'Stocks Filter',
                'Display all 15 minutes after the market close',
                'Display 1 during market open',
                'Display All'
            ]
        ],
        tableContentUs: [
            ['', 'Delayed Quotation', 'LV1 Advanced Quotation'],
            ['Quotation', 'Delayed Refresh', 'Real-Time Refresh'],
            ['Market Depth', '/', '1 Level'],
            ['Transaction Record', '/', 'Provided']
        ],
        introduce: {
            title: 'Free upgrade of real-time stock quotes for loyal customers',
            first:
                '1) New customers who successfully opened an account within 7 days of registration, are entitled to enjoy free 30 days US Stock real-time quote Level 1 streaming service.',
            second:
                '2) Customers who have successfully made the first-time deposit/ transfer of shares valued at HK$20,000 or above, are entitled to enjoy free 30 days HK Stock real-time quote Level 2 streaming service. ',
            third:
                '3) Customers who maintain the average daily asset valued at HK$50,000 or above in the past 30 days, are entitled to enjoy free HK Stock real-time quote Level 2 streaming service for 30 days. ',
            fourth:
                '4) Customers who maintain their real-time total asset value above HK$0 after account opening, are entitled to enjoy free US Stock real-time quote Level 1 streaming service.'
        }
    },
    buy: {
        title: '購買',
        buyTitle: '購買港股高級報價',
        buyBtn: '購買',
        selectTime: '選擇時限',
        price: '價格',
        cancelBtn: '取消',
        confirmBtn: '確認',
        buyRecord: '查看購買記錄',
        dialog: {
            // 未開戶
            noOpenAccount: {
                title: '您還未完成開戶，請先完成開戶',
                tip: '',
                cancel: '取消',
                confirm: '去開戶'
            },
            noMoney: {
                title: '可取資金餘額不足，請存入資金',
                tip: '',
                cancel: '取消',
                confirm: '存入資金'
            },
            // noPassword: {
            //     title: '您尚未設定交易密碼，請設定後進行下一步操作',
            //     tip: '',
            //     cancel: '取消',
            //     confirm: '好的'
            // },
            // invalidPassword: {
            //     title: '交易密碼錯誤',
            //     tip: key => `請重新輸入，您還可以嘗試${key}次`,
            //     cancel: '找回密碼',
            //     confirm: '重新輸入'
            // },
            // errorPassword: {
            //     title: '錯誤次數過多，交易密碼已鎖定',
            //     tip: key => `請${key}分鐘以後重新登入或找回密碼`,
            //     cancel: '找回密碼',
            //     confirm: '關閉'
            // },
            success: {
                cancel: '確定',
                confirm: '查看購買記錄',
                done: '已完成購買',
                type: '購買港股LV2高級行情',
                time: '時長',
                price: '價格',
                remind: '高級行情在一分鐘之內生效'
            },
            fail: {
                title: '購買失敗',
                tip: '請稍後再試或聯繫客服',
                cancel: '取消',
                confirm: '聯繫客服'
            },
            counting: {
                title: '當前為清算時間，暫不支持購買，請您稍後再試',
                cancel: '取消',
                confirm: '聯繫客服'
            }
        }
    },
    buyRecord: {
        title: '購買記錄',
        date: '購買日期',
        time: '時長',
        price: '價格',
        status: '狀態',
        more: '查看更久記錄',
        contact: '聯繫客服',
        noRecord: '暫無購買記錄',
        month: '月',
        statusMap: {
            confirming: '確認中',
            success: '購買成功',
            fail: '購買失敗'
        }
    }
}
