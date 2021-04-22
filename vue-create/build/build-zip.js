const compressing = require('compressing')
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const { getDirFiles } = require('./utils')
const { version } = require('../package.json')


let projects = process.argv.slice(2)

if(projects[0] === 'all'){
    // 全量打包 yarn build-zip all
    projects = fs.readdirSync(path.resolve(__dirname, `../src/pages`))
}

// 删除目录
function deleteall(path) {
    let files = [];
    if(fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function(file, index) {
            const curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteall(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

console.log(projects)
projects.forEach(project => {
    let workerProcess = exec(`vue-cli-service build --project=${project} --zip`, {maxBuffer: 1024*1024*10}, (err) => {
        if (err) {
            console.error(err)
        }
    })

    workerProcess.stdout.on('data', function (data) {
        console.log(data)
    })

    // webpack打包后的处理：压缩，添加hash
    workerProcess.stdout.on('end', async function () {
        let files = getDirFiles(`dist/${project}`)
        // 删除html
        files.forEach(file => {
            if(fs.statSync(file).isFile() && /.+\.html/.test(file)) {
                fs.unlinkSync(file);
            }
        })
        files = files.filter(file => fs.existsSync(file))

        // 获取文件hash
        const md5sum = crypto.createHash('md5')
        files.forEach(file => {
            md5sum.update(fs.readFileSync(file))
        })
        const hash = md5sum.digest('hex')
            .toLowerCase()
            .substring(0, 8)

        // 添加json文件配置
        const json = JSON.stringify({
            name: `${project}-${version}-${hash}.zip`,
            key: project,
            version,
            hash
        })
        fs.writeFileSync(`dist/${project}/config.json`, json)

        // 压缩
        await compressing.zip.compressDir(`dist/${project}`, `dist/${project}.zip`)

        // 重命名
        fs.rename(`dist/${project}.zip`, `dist/${project}-${version}-${hash}.zip`, function (err) {
            console.log(`zip file：${project}.${hash}.zip`)
            if(err){
                console.log(err)
            }
        })
    })
})
