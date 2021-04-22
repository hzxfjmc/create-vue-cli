export const zhCHT = {
    index: {
        common: {
            Hk: '港股',
            Us: '美股'
        },
        title: '我的報價',
        videoTitle: '兩分鐘了解高級報價',
        card: {
            contentHk: '港股報價權限',
            contentUs: '美股報價權限',
            noLogin: {
                title: '延時報價',
                buttonText: '登入升級'
            },
            noBindPhone: {
                title: '延時報價',
                buttonText: '升級'
            },
            bmp: {
                title: '即時報價',
                buttonText: '免費升級',
                extraButtonText: '購買高級報價'
            },
            chLv2: {
                title: 'LV2串流報價',
                tip: '（適用於中國內地）',
                expireTime: dateStr => `有效期至：${dateStr}`,
                buttonText: '免費續期'
            },
            worldLv2Free: {
                title: 'LV2串流報價',
                tip: '（適用於全球）',
                expireTime: dateStr => `有效期至：${dateStr}`,
                extraButtonText: '續期高級報價'
            },
            worldLv2Buy: {
                title: 'LV2串流報價',
                tip: '（適用於全球）',
                expireTime: dateStr => `有效期至：${dateStr}`,
                extraButtonText: '續期高級報價'
            },
            bmpHk: {
                title: '即時報價',
                buttonText: '免費升級',
                extraButtonText: '購買高級報價'
            },
            worldHk: {
                title: 'LV2串流報價',
                tip: '（適用於全球）',
                expireTime: dateStr => `有效期至：${dateStr}`,
                buttonText: '免費續期',
                extraButtonText: '續期高級報價'
            },
            usLv1: {
                title: 'LV1串流報價',
                expireTime: dateStr => `有效期至：${dateStr}`,
                buttonText: '免費續期'
            },
            noUsLv1: {
                title: '延時報價',
                buttonText: '免費升級'
            }
        },
        tableTitleHk: '關於港股串流報價',
        tableTitleUs: '關於美股串流報價',
        tableContentHk: [
            ['', '延時報價', '即時報價', 'LV2串流報價'],
            ['報價速度', '延時刷新', '手動刷新', '實時刷新'],
            ['買賣檔', '/', '/', '10檔'],
            ['交易記錄', '/', '/', '提供'],
            ['經紀代號', '/', '/', '提供'],
            ['行業分類表現', '延時排行', '延時排行', '提供'],
            ['自選股列表', '全部股票', '20隻股票', '全部股票'],
            [
                '選股條件',
                '收市15分鐘後<br/>顯示全部',
                '開市期間<br/>只顯示1隻',
                '顯示全部'
            ]
        ],
        tableContentUs: [
            ['', '延時報價', 'LV1串流報價'],
            ['報價速度', '延時刷新', '實時刷新'],
            ['買賣檔', '/', '1檔'],
            ['交易記錄', '/', '提供']
        ],
        introduce: {
            title: '忠實客戶免費升級股票報價',
            first: '1) 新客戶於註冊7天內成功開戶，即賞30天美股LV1串流報價；',
            second:
                '2) 首次成功存款或轉倉達港幣$20,000或以上，即賞30天港股LV2串流報價；',
            third:
                '3) 客戶保持過去30天的日均資產值為港幣$50,000或以上，即獲贈30天港股LV2串流報價；',
            fourth:
                '4) 客戶在成功開戶後，維持實時賬戶總資產值為港幣$0以上，即可享美股LV1串流報價；'
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
