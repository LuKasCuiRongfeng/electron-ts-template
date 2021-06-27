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
const spinner = ora("start building")
const watcher = watch(rollupOptions)

if (argv.watch) {
    waiton({
        resources: [`tcp:${process.env.PORT}`]
    }).then(() => {
        let child: ChildProcess
        watcher.on("change", filename => {
            console.log("**********************\n")
            console.log(chalk.green(`--- ${filename} ---changed\n`))
            console.log("**********************\n")
        })
        watcher.on("event", e => {
            if (e.code === "END") {
                console.log("**********************\n")
                console.log(chalk.green(`build end\n`))
                console.log("**********************\n")
                if (child) child.kill()
                console.log("**********************\n")
                console.log(chalk.green(`electron is going to starting\n`))
                console.log("**********************\n")
                child = exec("electron .", (err) => {
                    if (err) {
                        console.log(err.message)
                    }
                })
            } else if (e.code === "ERROR") {
                console.log(chalk.red(`${e.error}`))
            }
        })
    })
} else {
    console.log("**********************\n")
    spinner.start("start build")
    console.log("**********************\n")
    rollup(rollupOptions).then(build => {
        spinner.stop()
        console.log("**********************\n")
        console.log(chalk.green(`successfully build to ${join(__dirname, "../dist/main/main.js")}`))
        console.log("**********************\n")
        build.write(rollupOptions.output as OutputOptions).then(() => {
            // 必须主动调用，不然没法进入打包
            process.exit(0)
        })
    }).catch(err => {
        spinner.stop()
        console.log(chalk.red(`failed ---${err}`))
    })
}