const { exec } = require('child_process')
let projects = process.argv.slice(2)
let env = process.argv[process.argv.length - 1]
if(env != 'sit' && env != 'uat' && env != 'dev'){
    env = 'sit'
}
projects.map((item,index)=>{
    if(item == 'sit' || item == 'uat' || item == 'dev'){
        projects.splice(index,1)
    }
})
projects.forEach(project => {
    // maxBuffer <number> stdout 或 stderr 允许的最大字节数。如果超过限制，则子进程会终止。参见 maxBuffer与Unicode。默认为 200*1024
    let workerProcess = exec('vue-cli-service serve --mode '+env+' --project=' + project, {
        maxBuffer: 1024 * 1024 * 10
    }, (err) => {
        if (err) {
            console.error(err)
        }
    })
    workerProcess.stdout.on('data', function (data) {
        console.log(data)
    })
})
