import { merge } from 'webpack-merge'
import { webpackBaseConfig } from './weback.config.base'

export const webpackDevConfig = merge(webpackBaseConfig, {
    mode: "development",
    devtool: "source-map",
})