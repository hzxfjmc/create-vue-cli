const CompressionWebpackPlugin = require('compression-webpack-plugin')
const commonConfig = require('./vue-common-config')
const { getPages, getCommandParam } = require('./utils')
const fs = require('fs')
const path = require('path')
    // const mockModule = require(path.resolve(__dirname, '../src/mock/modules/index.js'))
    // console.log('mockModule :', mockModule);
const project = getCommandParam('project')
    /**
     * 把相对于src目录的路径转换成绝对路径
     * @param sub_path
     * @returns {string}
     */
const absoluteSrcPath = sub_path => {
    return path.resolve(__dirname, `../src/${sub_path}`)
}


// 获取页面entry
const pages = getPages(`./src/pages/${project}/**/main.js`)
let openPage = ''
if (Object.values(pages)[0]) {
    openPage = Object.values(pages)[0].filename // 当前项目的第一个单页
}


const jyApi = `http://jy-${process.env.VUE_APP_ENV}.yxzq.com`

const hzApi = `http://hz-${process.env.VUE_APP_ENV}.yxzq.com`

const webappApi = `http://m-${process.env.VUE_APP_ENV}.yxzq.com`

console.log(`现在请求的是${process.env.VUE_APP_ENV}环境的接口${jyApi}`)
    // config 配置
module.exports = {
    ...commonConfig(project),
    pages: {
        ...pages
    },
    chainWebpack: config => {
        config.plugin('copy').tap(options => {
            if (fs.existsSync(`public/${project}`)) {
                options[0][0] = {
                    from: `public/${project}`,
                    to: '',
                    toType: 'dir',
                    ignore: []
                }
            } else {
                options[0] = []
            }
            return options
        })

        // todo：其他较少复用的node_modules模块需要单独提取
        // 不能提取其他公共文件，除非将相应chunk加入到htmlWebpackPlugin中，否则会丢失chunk
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
            }

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
    },
    configureWebpack: config => {
        console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + ['js', 'css', 'html'].join('|') + ')$'
                    ),
                    minRatio: 0.8
                })
            )
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    },
    devServer: {
        disableHostCheck: true,
        open: true, // 是否打开页面
        host: '0.0.0.0', // m-dev.yxzq.com
        sockHost: 'localhost',
        port: 80,
        https: false,
        hotOnly: true,
        openPage, // 当前项目的第一个单页
        proxy: {
            '/quotes-search': {
                target: 'http://10.210.110.75:8081',
                changOrigin: true
            },
            '/faceid': {
                target: 'https://api.megvii.com',
                changOrigin: true
            },
            // banner
            '/news-configserver': {
                target: hzApi,
                changOrigin: true
            },
            // 行情资讯接口服务器
            '^/helpCenter': {
                target: 'http://10.55.4.7:15002',
                changOrigin: true,
                pathRewrite: {
                    '^/helpCenter': ''
                }
            },
            '^/banner': {
                target: 'http://10.55.4.9:15002',
                changOrigin: true,
                pathRewrite: {
                    '^/banner': ''
                }
            },
            '/message-server': {
                target: 'http://10.210.20.39:8809',
                changOrigin: true
            },
            '/message-center': {
                target: hzApi,
                changOrigin: true
            },
            '/quotes-dataservice': {
                target: hzApi,
                changOrigin: true
            },
            // '/config-manager': {
            //     target: jyApi,
            //     changOrigin: true
            // },
            // '/stock-capital-server': {
            //     target: jyApi,
            //     changOrigin: true
            // },
            // '/stock-order-server': {
            //     target: jyApi,
            //     changOrigin: true
            // },
            '/user-server': {
                target: jyApi,
                changOrigin: true
            },
            // '/user-account-server': {
            //      target: jyApi,
            //     changOrigin: true
            // },
            // 策略详情接口
            '/news-strategyserver': {
                target: hzApi,
                changOrigin: true
            },
            // 帮助中心接口
            '/news-helpcenter': {
                target: hzApi,
                changOrigin: true
            },
            // 行情资讯接口服务器
            '^/news-': {
                target: hzApi,
                changOrigin: true
            },
            // 代理其他项目的图片
            '^/webapp': {
                target: webappApi,
                changOrigin: true
            },
            // 代理其他项目的图片
            '^/wealth': {
                target: webappApi,
                changOrigin: true
            },
            // '^/': {
            //     target: 'http://10.55.4.87:3000',
            //     changOrigin: true,
            // },
            //奖励中心
            '/product-server': {
                target: jyApi,
                // target: 'http://admin-sit.yxzq.com',
                changOrigin: true
            },
            // '/customer-relationship-server': {
            //     target: jyApi,
            //     changOrigin: true
            // },
            // '/user-oversea-server': {
            //     target: jyApi,
            //     changOrigin: true
            // },
            // '/verification-code-server': {
            //     target: jyApi,
            //     changOrigin: true
            // },
            'node-generator': {
                target: 'http://admin-sit.yxzq.com',
                changeOrigin: true
            },
            // 基金交易
            '/finance-server': {
                target: jyApi,
                changeOrigin: true
            },
            // 基金信息
            '/finance-info-server': {
                // target: 'http://10.210.20.83:8080',
                target: jyApi,
                // target: 'http://10.210.20.83:8082',
                changeOrigin: true
            },
            '/zt-group-apiserver': {
                target: hzApi,
                changeOrigin: true
            },

            //     // onProxyRes: function(proxyRes, req, res) {
            //     //     let resHttp = proxyRes.client._httpMessage
            //     //     console.log('onProxyRes :', resHttp)
            //     //     console.log('onProxyMethod :', resHttp.method)
            //     //     console.log('onProxyPath :', resHttp.path)
            //     //     // console.log('res.headers :', res.headers)
            //     //     for (const keys in proxyRes) {
            //     //         if (proxyRes.hasOwnProperty(keys)) {
            //     //             const reselement = proxyRes[keys];
            //     //             console.log('reselement :', keys);
            //     //         }
            //     //     }
            //     //     let str = ''
            //     //     proxyRes.on('data', (data) => {
            //     //         str += data
            //     //     })
            //     //     proxyRes.on('end', () => {
            //     //         console.log('end :', JSON.parse(str.toString()));
            //     //     })
            //     // }
            // },
            // 债券交易
            '/': {
                ws: false,
                target: jyApi,
                changeOrigin: true
            }
        },
        historyApiFallback: {}
    },
    productionSourceMap: false
}
