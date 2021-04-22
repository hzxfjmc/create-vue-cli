``# 盈立多语言设计

> 由于第三方组件过于臃肿且使用麻烦所以自己开发一套多语言方案

## 使用方法

通过Vue.js公开方法install安装

参数 messages 为初始语言库
参数 lang 为初始化默认语言

语言库格式参照其他开源的国际化项目

``` 
// 插件方式引用
// messages 为语言库
import { messages } from '@/utils/i18n-message/open-account/apply/index.js'
// 插件yx-i18n
import i18n from '@/plugins/yx-i18n/index.js'

Vue.use(i18n, {
    lang: 'zhCHT',
    messages
})

// 语言库格式

import { zhCHS } from './zh-chs'
import { zhCHT } from './zh-cht'

export const messages = {
    //简体中文
    zhCHS,
    //繁体中文
    zhCHT
}

// './zh-chs'
export const zhCHS = {
    personalInfo: '个人资料',
    openAnAccountImmediately: '立即开户',
    identifyTypeList: [
        {
            name: '香港身份证',
            identifyType: '2'
        },
        {
            name: '內地身份证',
            identifyType: '1'
        },
        {
            name: '护照',
            identifyType: '3'
        }
    ],
    selectPagesType:
        '暂不受理美国公民或美国永久居民卡（绿卡）持有者的开户申请，敬请谅解'
}

// './zh-cht'
export const zhCHT = {
    personalInfo: '個人資料',
    openAnAccountImmediately: '立即開戶',
    identifyTypeList: [
        {
            name: '香港身份證',
            identifyType: '2'
        },
        {
            name: '內地身份證',
            identifyType: '1'
        },
        {
            name: '護照',
            identifyType: '3'
        }
    ],
    selectPagesType:
        '暫不受理美國公民或美國永久居民卡(綠卡)持有者的開戶申請，敬請諒解'
}
```

## 组件内使用


直接在组件内定义i18n多语言源 然后可以在页面使用

切换语言可以不用刷新页面 方法 `this.$i18n.setLang('zhCHS')`

```
<template lang="pug">
yx-container.apply-home
    .apply-main(slot="main")
        .apply-main-banner(:style="`height: ${height}px`")
            .center 运营位
            van-button.apply-banner-bottom(
                type="primary" 
                @click="goOpenAccount" 
                size="large") {{$t('openAnAccountImmediately')}}
        .apply-main-add-credit(@click="testHandler") 品牌增信{{$t('test.a')}}
</template>

<script>
export default {
    i18n: {
        zhCHS: {
            test: {
                a: '简体'
            }
        },
        zhCHT: {
            test: {
                a: '简体'
            }
        }
    },
    data() {
        return {
            height: 507
        }
    },
    methods: {
        testHandler() {
            this.$i18n.setLang(this.$i18n.lang === 'zhCHS' ? 'zhCHT' : 'zhCHS')
            console.log(this, this.$i18n.lang)
        },
        goOpenAccount() {
            this.$router.push({
                name: 'select-pages'
            })
        }
    }
}
</script>
```


