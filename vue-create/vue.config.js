const isZip = process.argv.findIndex(argv => /^--zip/.test(argv))

const vueConfig = isZip > -1 ? require("./build/vue-config-zip") : require("./build/vue-config")
module.exports = vueConfig
