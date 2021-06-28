import { exec, ChildProcess } from 'child_process'
import { join } from 'path'
import { watch, rollup, OutputOptions } from 'rollup'
import minimist from 'minimist'
import chalk from 'chalk'
import ora from 'ora'
import waiton from 'wait-on'
import { config } from 'dotenv'
import rollupOptions from './rollup.config'

config()

const argv = minimist(process.argv.slice(2))
const spinner = ora()
const watcher = watch(rollupOptions)
let child: ChildProcess | null = null
console.log("**********************")
console.log(chalk.green("wait for rendering to complete"))
if (argv.watch || argv.debug) {
    waiton({
        resources: [`tcp:${process.env.PORT}`]
    }).then(() => {
        console.log("**********************")
        spinner.start(chalk.green(`ready to compile electron from typescript to javascript`))
        watcher.on("change", filename => {
            console.log("**********************")
            console.log(chalk.green(`${filename} has been changed`))
        })
        watcher.on("event", e => {
            if (e.code === "END") {
                console.log("**********************")
                console.log(chalk.green(`successfully build electron from typescript to javascript
                path: ${join(__dirname, "../dist/main/main.js")}`))
                if (child) child.kill()
                console.log("**********************")
                console.log(chalk.green(`ready to start electron...`))
                let command = ""
                if (argv.debug) {
                    command = "electron --inspect=5858 ."
                    console.log(chalk.green(`打开 chrome://inspect 可调试主进程`))
                } else {
                    command = "electron ."
                }
                child = exec(command, (err, stdout) => {
                    if (err) {
                        console.log("**********************")
                        console.log(chalk.red(err.message))
                        process.exit(1)
                    }
                })
            } else if (e.code === "ERROR") {
                console.log("**********************")
                console.log(chalk.red(`${e.error}`))
            }
        })
    })
} else {
    console.log("**********************")
    spinner.start(chalk.green(`ready to compile electron from typescript to javascript`))
    rollup(rollupOptions).then(build => {
        spinner.stop()
        console.log("**********************")
        console.log(chalk.green(`successfully build electron from typescript to javascript
        \npath: ${join(__dirname, "../dist/main/main.js")}`))
        console.log("**********************")
        build.write(rollupOptions.output as OutputOptions).then(() => {
            // 必须主动调用，不然没法进入打包
            process.exit(0)
        })
    }).catch(err => {
        spinner.stop()
        console.log("**********************")
        console.log(chalk.red(`failed to complie: ${err}`))
        process.exit(1)
    })
}