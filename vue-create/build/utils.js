const glob = require('glob')
const fs = require('fs')
const path = require('path')


module.exports = {
    // 获取页面入口
    getPages: globPath => {
        const entries = {}
        glob.sync(globPath).forEach(function (entry) {
            const paths = entry.split('/') || []
            // 单页名，如ground-push,register...
            const entryName = paths[4];
            // 模块名，如marketing,market...
            const moduleName = paths[3];
            // 模块根html路径
            let moduleIndexHtmlPath = `public/${moduleName}/index.html`
            // 单页根html路径
            let pageIndexHtmlPath = `public/${moduleName}/${entryName}/index.html`
            let template = (fs.existsSync(pageIndexHtmlPath) && pageIndexHtmlPath)
                || (fs.existsSync(moduleIndexHtmlPath) && moduleIndexHtmlPath)
                || 'public/index.html'
            entries[entryName] = {
                entry,
                template: template,
                filename: `${entryName}.html`
            }
        })
        return entries
    },

    // 获取命令参数
    getCommandParam: key => {
        const reg = new RegExp(`^--${key}`)
        const index = process.argv.findIndex(argv => reg.test(argv))
        return process.argv[index] && process.argv[index].split('=')[1]
    },

    // 获取目录下的文件列表
    getDirFiles(jsonPath){
        let jsonFiles = [];
        function findJsonFile(path_1){
            let files = fs.readdirSync(path_1);
            files.forEach(function (item) {
                let fPath = path.join(path_1, item);
                let stat = fs.statSync(fPath);
                if(stat.isDirectory() === true) {
                    findJsonFile(fPath);
                }
                if (stat.isFile() === true) {
                    jsonFiles.push(fPath);
                }
            });
        }
        findJsonFile(jsonPath);
        return jsonFiles
    }
}
