const fs = require('fs')

// vue.config.js 通用配置
module.exports = project => ({
    outputDir: `dist/${project}`,
    // baseUrl: `/webapp/${project}`,
    publicPath: `/vue-template-project/${project}`,
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    green: '#10ba70',
                    blue: '#3c78fa',
                    red: '#e72653',
                    'button-primary-background-color': '#285AC8',
                    'button-primary-color': '#EBEBEB',
                    'button-primary-border-color': '#285AC8',
                }
            },
            sass: {
                data: `@import "@/assets/styles/theme.scss";`,
            }
        }
    }
})
