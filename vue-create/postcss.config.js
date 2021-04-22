module.exports = {
    plugins: {
        autoprefixer: {
            browsers: ['Android >= 4.0', 'iOS >= 7']
        },
        'postcss-pxtorem': {
            rootValue: 50,
            propList: [
                '*',
                '!font*',
                '!border-bottom',
                '!border-width',
                '!box-shadow',
            ],
            selectorBlackList: ['html', 'body']
        }
    }
}
