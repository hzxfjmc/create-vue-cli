process.env.VUE_CLI_BABEL_TARGET_NODE = true
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true

module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
        '.*\\.(vue)$': 'vue-jest',
        '^.+\\.js$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub'
    },
    // jest 默认忽略对 node_modules 的转换解析，我们项目中有使用到 vant 等包，所以不能忽略
    // 这里随便写一个资源路径进行覆盖
    transformIgnorePatterns: ['/src/assets'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^dayjs$': '<rootDir>/node_modules/dayjs'
    },
    // snapshotSerializers: ['jest-serializer-vue'],
    testMatch: [
        '**/test/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
    ],
    // 在测试代码中获取的 window.location.href 的值
    testURL: 'http://m-dev.baidu.com?test1=123&test2=321'
    // watchPlugins: [
    //     'jest-watch-typeahead/filename',
    //     'jest-watch-typeahead/testname'
    // ]
}
