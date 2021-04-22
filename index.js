#!/usr/bin/env node

const fs = require('fs')
const program = require('commander')
const chalk = require('chalk')
const download = require('download-git-repo')
const inquirer = require('inquirer')
const ora = require('ora')
const symbols = require('log-symbols')
const handlebars = require('handlebars')

program
  .version(require('./package').version, '-v, --version')
  .command('init <name>')
  .action((name) => {
    if (!fs.existsSync(name)) {
      inquirer.prompt([
        {
          name: 'templateType',
          message: 'which template type you need to create?',
          type: 'list',
          choices: ['webpack', 'rollup'],
        },
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
        // start to download
        const spinner = ora('downloading template...')
        spinner.start()
        const downloadPath = `direct:https://github.com/LuckyWinty/${answers.templateType}-project-template.git#master`
        download(downloadPath,
          name, { clone: true }, (err) => {
            if (err) {
              spinner.fail()
              console.error(symbols.error,
                chalk.red(`${err}download template fail,please check your network connection and try again`))
              process.exit(1)
            }
            spinner.succeed()
            const meta = {
              name,
              description: answers.description,
              author: answers.author,
            }
            const fileName = `${name}/package.json`
            const content = fs.readFileSync(fileName).toString()
            const result = handlebars.compile(content)(meta)
            fs.writeFileSync(fileName, result)
          })
      })
    } else {
      // 错误提示项目已存在，避免覆盖原有项目
      console.error(symbols.error, chalk.red('project had exist'))
    }
  }).on('--help', () => {
    console.log('  Examples:')
    console.log('    $ w init index')
    console.log()
  })

program.parse(process.argv)
