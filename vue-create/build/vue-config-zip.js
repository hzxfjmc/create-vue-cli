const commonConfig = require('./vue-common-config')
const { getPages, getCommandParam } = require('./utils')
const project = getCommandParam('project')

// 打包文件配置
const zipConfig = {
    market: '?(news|help|generator|finance)'
}
const pattern = zipConfig[project] || '**'

const configs = Object.assign(
    { ...commonConfig(project) },
    {
        outputDir: `dist/${project}`
    }
)

// 获取页面entry
const pages = getPages(`./src/pages/${project}/${pattern}/main.js`)

// config 配置
module.exports = {
    ...configs,
    pages: {
        ...pages
    },
    productionSourceMap: false,

    chainWebpack: config => {
        config.plugins.delete('copy')
        // todo：其他较少复用的node_modules模块需要单独提取
        config.optimization.splitChunks({
            cacheGroups: {
                // 公共包
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\\/]node_modules[\\\/](vue|axios|badjs-report|fastclick|core-js|@babel|path-browserify|vue-loader|is-buffer|node-libs-browser|regenerator-runtime)[\\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                // 其余公共代码
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            },

            // chunks: 'all',
            // maxInitialRequests: Infinity,
            // minSize: 20000,
            // cacheGroups: {
            //     vendor: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -20,
            //         name (module) {
            //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            //             return `npm.${packageName.replace('@', '')}`
            //         }
            //     }
            // }
        })
    }
}
