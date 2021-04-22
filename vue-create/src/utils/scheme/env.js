import { getUaValue } from '../html-utils'

let name = ''
let hzHost = ''
let jyHost = ''
let wechatAppid = ''
const map = {
    localhost: () => {
        name = 'local'
        hzHost = '/yx-hz-host'
        jyHost = '/yx-jy-host'
    },
    'm-dev': () => {
        name = 'dev'
        hzHost = 'http://hz-dev.yxzq.com'
        jyHost = 'http://jy-dev.yxzq.com'
        wechatAppid = 'wx91f4b186fba28ab1'
    },
    'm-sit': () => {
        name = 'sit'
        hzHost = 'http://hz-sit.yxzq.com'
        jyHost = 'http://jy-sit.yxzq.com'
        wechatAppid = 'wx332a1e234a6b259e'
    },
    'm1-sit': () => {
        name = 'sit'
        hzHost = 'http://hz1-sit.yxzq.com'
        jyHost = 'http://jy1-sit.yxzq.com'
        wechatAppid = 'wx332a1e234a6b259e'
    },
    'm-uat': () => {
        name = 'uat'
        hzHost = 'http://hz-uat.yxzq.com'
        jyHost = 'http://jy-uat.yxzq.com'
        wechatAppid = 'wx14edbd47cefa369e'
    },
    'm1-uat': () => {
        name = 'uat'
        hzHost = 'http://hz1-uat.yxzq.com'
        jyHost = 'http://jy1-uat.yxzq.com'
        wechatAppid = 'wx14edbd47cefa369e'
    },
    m: () => {
        name = 'pro'
        hzHost = 'https://hz.yxzq.com'
        jyHost = 'https://jy.yxzq.com'
        wechatAppid =
            location.hostname === 'm.usmartsecurities.com'
                ? 'wxe5de22541f2908ae'
                : 'wxa47031c91b5bb4b7'
    }
}

const host = location.hostname
let envFlag = host.split('.')[0]
envFlag = ['127', '10', '192'].includes(envFlag) ? 'localhost' : envFlag
if (map[envFlag]) {
    map[envFlag]()
}

// 以下三个参数获取的优先级：userAgent > url参数 > localhost配置 > 默认值
let appType = getUaValue('appType')
let langType = getUaValue('langType')
let stockColorType = getUaValue('stockColorType')

// 给定默认值
appType = appType || '1'
langType = langType || '1'
stockColorType = stockColorType || appType
const isMainland = appType === '1'

const langMap = new Map([['1', 'zhCHS'], ['2', 'zhCHT'], ['3', 'en']])
const lang = langMap.get(langType) || 'zhCHS'
const ua = navigator.userAgent
const skinType = getUaValue('skinType')
const mainlandTheme = isMainland && (skinType || 'black')
const isYouxinIpad = /com\.yxzq\.enterprise\.ipadinner/.test(ua)
let appDownloadUrl = `${location.origin}/webapp/hz-static-page/download.html`
if (appType === '2') {
    const hkLang = new Map([['1', 'zh-cn'], ['2', 'zh-hk'], ['3', 'en']]).get(
        langType
    )
    const origin =
        name === 'pro'
            ? 'https://usmartsecurities.com'
            : 'http://10.210.110.63:8085'
    appDownloadUrl = `${origin}/hk/${hkLang}/download`
}

let env = {
    version: '1.1.0',
    appVersion: getUaValue('appVersion'),
    uaEnvironment: getUaValue('environment', false),
    name, // local、dev、sit、uat、pro
    hzHost, // 行情资讯接口服务器
    jyHost, // 交易接口服务器
    lang, // 简体(默认)：zhCHS；香港繁体：zhCHT；英文：en
    appType, // 大陆版(默认)：1；香港版：2
    langType, // 简体(默认)：1；香港繁体：2；英文：3
    stockColorType, // 1-红涨绿跌，2-绿涨红跌
    wechatAppid, // 微信公众号appid
    logoUrl: `${location.origin}/webapp/diagnose/images/logo-${
        isMainland ? 'mainland' : 'hk'
    }.png`, // logo地址
    mainlandTheme, // 大陆版主题色：white、black(大陆版默认black，香港版默认false)
    skinType,
    isMainlandBlack: mainlandTheme === 'black', // 香港版false
    isMainlandwhite: mainlandTheme === 'white', // 香港版false
    // ==========================
    isLocal: name === 'local',
    isDev: name === 'dev',
    isSit: name === 'sit',
    isUat: name === 'uat',
    isPro: name === 'pro',
    isMainland,
    isHK: appType === '2',
    isLangZhCn: langType === '1',
    isLangZhHk: langType === '2',
    isLangEn: langType === '3',
    isYouxinIpad,
    isYouxinApp: /yxzq/i.test(ua) && !isYouxinIpad,
    isAndroid: /android/i.test(ua),
    isIos: /(ipad)|(iphone)/i.test(ua),
    isWechat: /micromessenger/i.test(ua) && !/wxwork/i.test(ua), // 是否微信环境，非企业微信
    isWxwork: /wxwork/i.test(ua), // 是否企业微信
    appDownloadUrl,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(
        ua
    )
}

export default env
