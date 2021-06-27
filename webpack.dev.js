import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import { webpackDevConfig } from './webpack.config.dev'
import { config } from 'dotenv'

config()

const serverOptions = {
    contentBase: "./dist",
    hot: true,
    host: "localhost",
    stats: {
        preset: "summary",
        builtAt: true,
        colors: true,
        timings: true,
        env: true,
        errors: true,
        entryPoints: true
    }
}

export const complier = webpack(webpackDevConfig)

WebpackDevServer.addDevServerEntrypoints(webpackDevConfig, serverOptions)
const server = new WebpackDevServer(complier, serverOptions)

server.listen(process.env.PORT, "localhost", err => {
    if (err) throw err
    console.log(`[${new Date()}]! listening on the port of ${process.env.PORT}`)
})

