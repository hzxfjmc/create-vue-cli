const fs = require('fs')
const program = require('commander')
const chalk = require('chalk')   // 标注颜色的
const download = require('download-git-repo')  // 从git拉取代码模板
const inquirer = require('inquirer')  //命令行里的选择
const ora = require('ora')
const handlebars = require('handlebars')


program
  .version(require('./package').version, '-v, --version')
  .command('init <name>')
  .action((name) => {
      console.log(name)
    if (!fs.existsSync(name)) {
      inquirer.prompt([
        {
          name: 'description',
          message: 'please enter a description:',
        },
        {
          name: 'author',
          message: 'please enter a author:',
        }
      ]).then((answers) => {
        console.log(answers)
        const spinner = ora('downloading template...')
        spinner.start()
        // 从git拉取代码路径
        const downloadPath = `direct:https://github.com/hzxfjmc/vue-template-project.git#main`
        download(downloadPath,
            dir, { clone: true }, (err) => {
            if (err) {
              spinner.fail()
              console.log(err)
            }
            spinner.succeed()
            const meta = {
              dir,
              description: answers.description,
              author: answers.author,
            }
            const fileName = `${dir}/package.json`
            const content = fs.readFileSync(fileName).toString()
            const result = handlebars.compile(content)(meta)
            fs.writeFileSync(fileName, result)
          })
      })
    } else {
      // 错误提示项目已存在，避免覆盖原有项目
      console.log('项目名字已经存在')
      chalk.red('project had exist')
    }
  }).on('--help', () => {
    console.log('  Examples:')
    console.log('    $ w init index')
    console.log()
  })

program.parse(process.argv)

