import {
    camelize,
    isDef,
    isObj,
    guid,
    getParameter,
    debounce,
    throttle,
    compareVersion,
    calcCountDownDay,
    dateFormat,
    generateUUID,
    transNumToThousandMark
} from '@/utils/tools.js'

describe('utils-tools', () => {
    // 短横线转换成驼峰
    it('camelize', () => {
        expect(camelize('abcbc')).toBe('abcbc')
        expect(camelize('abc-bc')).toBe('abcBc')
        expect(camelize('abc-bc-dc')).toBe('abcBcDc')
    })

    // 参数是否已定义
    it('isDef', () => {
        expect(isDef(undefined)).toBe(false)
        expect(isDef(null)).toBe(false)
        expect(isDef('')).toBe(true)
        expect(isDef('1')).toBe(true)
        expect(isDef({})).toBe(true)
        expect(isDef([])).toBe(true)
    })

    // 参数是否是对象
    it('isObj', () => {
        expect(isObj(null)).toBe(false)
        expect(isObj(undefined)).toBe(false)
        expect(isObj(function() {})).toBe(true)
        expect(isObj({})).toBe(true)
        expect(isObj(new Date())).toBe(true)
        expect(isObj([])).toBe(true)
        expect(isObj(1)).toBe(false)
        expect(isObj('1')).toBe(false)
        expect(isObj(true)).toBe(false)
    })

    it('guid', () => {
        // 457a5abe-3ec4-4dfd-957a-1a7597acb5d6
        expect(guid()).toMatch(
            /^[\da-zA-Z]{8}-[\da-zA-Z]{4}-[\da-zA-Z]{4}-[\da-zA-Z]{4}-[\da-zA-Z]{12}$/
        )
    })

    it('generateUUID', () => {
        // 457a5abe-3ec4-4dfd-957a-1a7597acb5d6
        expect(generateUUID()).toMatch(
            /^[\da-zA-Z]{8}-[\da-zA-Z]{4}-[\da-zA-Z]{4}-[\da-zA-Z]{4}-[\da-zA-Z]{12}$/
        )
    })

    it('getParameter', () => {
        // 测试的 window.location.href 地址为 jest.config.js 的 testURL 属性
        expect(getParameter('test')).toBe(undefined)
        expect(getParameter('test1')).toBe('123')
    })

    // 防抖
    // expect(fn).toHaveBeenCalled()          // 是否被调用
    // expect(fn).toHaveBeenCalledTimes(1)    // 是否只调用了一次
    // expect(fn).toHaveBeenCalledWith(1, 2)  // 参数值
    // expect(fn).toHaveReturnedWith(3)       // 返回值
    it('debounce', done => {
        const fn = jest.fn(() => {
            console.log('调用了 debounce')
            // jest 对异步行为只会等待 5 秒，超过会判断为失败
            expect(fn).toHaveBeenCalledTimes(1)
            done()
        })
        let y = debounce(fn, 2000)
        y()
        expect(fn).toHaveBeenCalledTimes(0)
    })

    // 节流
    it('throttle', done => {
        const fn = jest.fn(() => {
            console.log('调用了 throttle')
            // jest 对异步行为只会等待 5 秒，超过会判断为失败
            expect(fn).toHaveBeenCalledTimes(1)
            done()
        })
        let y = throttle(fn, 2000)
        y()
        expect(fn).toHaveBeenCalledTimes(0)
    })

    // 比较版本号
    it('compareVersion', () => {
        // 0：v1 = v2，1：v1 > v2，-1：v1 < v2
        expect(compareVersion('1.0.0', '1.0.0')).toBe(0)
        expect(compareVersion('1.0.0', '1.1.0')).toBe(-1)
        expect(compareVersion('1.0.0', '1.0.1')).toBe(-1)
        expect(compareVersion('1.7.0', '1.17.0')).toBe(-1)
        expect(compareVersion('1.17.0', '1.7.0')).toBe(1)
        expect(compareVersion('1.0.7', '1.0.17')).toBe(-1)
        expect(compareVersion('1.0.17', '1.0.7')).toBe(1)
    })

    // 倒计时
    it('calcCountDownDay', () => {
        // 一年按 365 天计算
        let t1 = new Date('2020-05-15').getTime()
        let t2 = new Date('2022-05-15').getTime()
        let initTime = new Date('2019-10-18').getTime()
        // 重定义 getTime 方法，固化计算相差时间
        Date.prototype.getTime = function() {
            return initTime
        }
        expect(calcCountDownDay(t1)).toBe('210天')
        expect(calcCountDownDay(t2)).toBe('2年210天')
    })

    // 格式化日期
    it('dateFormat', () => {
        let t1 = new Date('2020-05-15 5:6:7')
        let t2 = new Date('2022-05-15 5:6:7')
        let format1 = 'YYYY-MM-DD HH:mm:ss'
        // YYYY 年 2019
        // M 1月 MM 01月
        // D 1日 DD 01日
        // H 1时 HH 01时 24小时制
        // h 1时 HH 01时 12小时制
        // m 1分钟 mm 01分钟
        // s 1秒  ss 01秒

        // dateFormat 默认格式： YYYY-MM-DD HH:mm
        expect(dateFormat(t1)).toBe('2020-05-15 05:06')
        expect(dateFormat(t2, format1)).toBe('2022-05-15 05:06:07')
    })

    // 对钱进行处理，设置千分位以及截取小数位
    it('transNumToThousandMark', () => {
        expect(transNumToThousandMark('123')).toBe('123.00')
        expect(transNumToThousandMark('1234')).toBe('1,234.00')
        expect(transNumToThousandMark('1234.123')).toBe('1,234.12')
        expect(transNumToThousandMark('1234.1235', 3)).toBe('1,234.123')
        expect(transNumToThousandMark('1234.1235', 4)).toBe('1,234.1235')
    })
})
