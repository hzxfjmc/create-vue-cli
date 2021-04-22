export const zhCHS = {
    index: {
        common: {
            Hk: '港股',
            Us: '美股'
        },
        title: '我的行情',
        videoTitle: '两分钟了解高级行情',
        card: {
            contentHk: '我的港股行情权限',
            contentUs: '我的美股行情权限',
            noLogin: {
                title: '延时行情',
                buttonText: '登录升级'
            },
            noBindPhone: {
                title: '延时行情',
                buttonText: '升级'
            },
            bmp: {
                title: 'BMP基础行情',
                buttonText: '免费升级',
                extraButtonText: '购买高级行情'
            },
            chLv2: {
                title: 'LV2高级行情',
                tip: '（适用于中国内地）',
                expireTime: dateStr => `有效期至：${dateStr}`,
                buttonText: '免费续期'
            },
            worldLv2Free: {
                title: 'LV2高级行情',
                tip: '（适用于全球）',
                expireTime: dateStr => `有效期至：${dateStr}`,
                extraButtonText: '续期高级行情'
            },
            worldLv2Buy: {
                title: 'LV2高级行情',
                tip: '（适用于全球）',
                expireTime: dateStr => `有效期至：${dateStr}`,
                extraButtonText: '续期高级行情'
            },
            bmpHk: {
                title: 'BMP基础行情',
                buttonText: '免费升级',
                extraButtonText: '购买高级行情'
            },
            worldHk: {
                title: 'LV2高级行情',
                tip: '（适用于全球）',
                expireTime: dateStr => `有效期至：${dateStr}`,
                buttonText: '免费续期',
                extraButtonText: '续期高级行情'
            },
            usLv1: {
                title: 'LV1高级行情',
                expireTime: dateStr => `有效期至：${dateStr}`,
                buttonText: '免费续期'
            },
            noUsLv1: {
                title: '延时行情',
                buttonText: '免费升级'
            }
        },
        tableTitleHk: '关于港股高级行情',
        tableTitleUs: '关于美股高级行情',
        tableContentHk: [
            ['', '延时行情', 'BMP基础行情', 'LV2高级行情'],
            ['报价速度', '延时更新', '手动更新', '及时更新'],
            ['买卖盘', '/', '/', '10档'],
            ['交易记录', '/', '/', '支持'],
            ['经纪挂牌', '/', '/', '支持'],
            ['行业分类表现', '延时排行', '延时排行', '支持'],
            ['自选股列表', '全部股票 ', '20支股票', '全部股票'],
            [
                '条件选股',
                '收盘15分钟后<br/>显示全部',
                '开盘期间<br/>仅显示一支',
                '显示全部'
            ]
        ],
        tableContentUs: [
            ['', '延时行情', 'LV1高级行情'],
            ['报价速度', '延时更新', '及时更新'],
            ['买卖盘', '/', '1档'],
            ['交易记录', '/', '支持']
        ],
        introduce: {
            title: '忠实客户免费升级股票行情',
            first: '1) 新客户于注册7天内成功开户，即赏30天美股LV1高级行情；',
            second:
                '2) 首次成功入金或转仓达港币$20,000或以上，即赏30天港股LV2高级行情；',
            third:
                '3) 客户保持过去30天的日均资产值为港币$50,000或以上，即获赠30天港股LV2串流报价；',
            fourth:
                '4) 客户在成功开户后，维持实时账户总资产值为港币$0以上，即可享美股LV1串流报价；'
        }
    },
    buy: {
        title: '购买',
        buyTitle: '购买港股高级行情',
        buyBtn: '购买',
        selectTime: '选择时限',
        price: '价格',
        cancelBtn: '取消',
        confirmBtn: '确认',
        buyRecord: '查看购买记录',
        dialog: {
            // 未開戶
            noOpenAccount: {
                title: '您还未完成开户，请先完成开户',
                tip: '',
                cancel: '取消',
                confirm: '去开户'
            },
            noMoney: {
                title: '可取资金余额不足，请存入资金',
                tip: '',
                cancel: '取消',
                confirm: '存入资金'
            },
            // noPassword: {
            //     title: '您尚未设定交易密码，请设定后进行下一步操作',
            //     tip: '',
            //     cancel: '取消',
            //     confirm: '好的'
            // },
            // invalidPassword: {
            //     title: '交易密码错误',
            //     tip: '请重新输入，您还可以尝试Y次',
            //     cancel: '找回密码',
            //     confirm: '重新输入'
            // },
            // errorPassword: {
            //     title: '错误次数过多，交易密码已锁定',
            //     tip: '请Y分钟以后重新登入或找回密码',
            //     cancel: '找回密码',
            //     confirm: '关闭'
            // },
            success: {
                cancel: '确定',
                confirm: '查看购买记录',
                done: '已完成购买',
                type: '购买港股LV2高级行情',
                time: '时长',
                price: '价格',
                remind: '高级行情在一分钟之内生效'
            },
            fail: {
                title: '购买失败',
                tip: '请稍后再试或联系客服',
                cancel: '取消',
                confirm: '联系客服'
            },
            counting: {
                title: '当前为清算时间，暂不支持购买，请您稍后再试',
                cancel: '取消',
                confirm: '联系客服'
            }
        }
    },
    buyRecord: {
        title: '购买记录',
        date: '购买日期',
        time: '时长',
        price: '价格',
        status: '状态',
        more: '查看更久记录',
        contact: '联系客服',
        noRecord: '暂无购买记录',
        month: '月',
        statusMap: {
            confirming: '确认中',
            success: '购买成功',
            fail: '购买失败'
        }
    }
}
