import { merge } from 'webpack-merge'
import { webpackBaseConfig } from './weback.config.base'

export const webpackProdConfig = merge(webpackBaseConfig, {
    mode: "production"
})