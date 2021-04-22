## 命名规范

不用驼峰 
`a-b.vue`
`c-d.js`

## 发布

git 提交的时候带上指令

--build 代表此次提交需要发布

-d 代表需要部署的页面 deploypage

open-account 是项目 如果同时发布多个项目，则 `--build -d open-account -d market`

## 分支规则

dev 分支发布 dev 环境

sit 分支发布 sit 环境

release 分支发布 sit 环境，并将 tag 提交至预发布仓库，等待发布

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve <project>
```
 
### Compiles and minifies for production

```
yarn run build <project>
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## build 方案

```
yarn run serve <project>
yarn run build <project>

// baseUrl: /youxin/<project> ---> ex: http://hz-dev.yxzq.com/youxin/project/index.html
```

project 可以是多页（同骨架） 也可以是单页

## Project Structure

```
// router拦截器 store 待定
|---- build 构建脚本目录
|---- config 项目配置目录
|---- static 静态资源目录
|---- src 源码目录
        |---- assets 通用资源目录
            |---- styles // less scss ...
            |---- icons
        |---- components 通用基础组件目录
        |---- biz-components 通用业务组件目录
            |----- ....
        |---- service 业务接口文件目录
            |----- OrderService.js
            |----- user-server.js
            |----- .....
        |---- pages 项目根目录
            |----市场 // 项目目录 mul-pages 同骨架
                |----<page> // pages
                    |----main.js
            |----开户
                |----<page>
                    |----main.js
            |----交易
                |----<page>
                    |----main.js
        |---- utils 通用工具包
            |----vue-filter
            |----global-components
            |----vue-directive
            |----localStorage.js
            |----DOMAIN.js
```

## pug

## eslint

不同项目的标准一致，方便开发,如果修改则所有项目都需要修改

```
module.exports = {
  root: true,
  env: {
      browser: true,
      node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      'vue/no-use-v-if-with-v-for': 0,
      "prettier/prettier": {
          "rangeStart": 4
      }
  },
  parserOptions: {
      parser: "babel-eslint",
  }
};
```

##  适配方案


vw + rem

设计稿对应 375 代码中直接用 px 写 postcss-px2rem 转成 rem 

其中 font-size 和 line-height px 单位不会转

## 常用封装

### directive
 
### filter

### env DOMAIN.JS

### global-components

异步全局组件 

### vue plugins

如 vant element 

### keepalive 方案 

```
function parentIsAlive (component) {
    let parent = component.$parent
    if (parent) {
        if (parent.$options.keepalive) {
            return true
        } else {
            return parentIsAlive(parent)
        }
    }
    return false
}


Vue.mixin({
    mixins: [{
        deactivated () {
            if (this.$options.keepalive !== true && !parentIsAlive(this)) {
                this.$destroy()
            }
        }
    }]
})

```
