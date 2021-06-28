import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const webpackBaseConfig = {
    entry: join(__dirname, "src/render/index.tsx"),
    output: {
        filename: "[name].[contenthash].js",
        path: join(__dirname, "dist/render"),
        clean: true,
        pathinfo: false
    },
    target: ["electron-renderer"],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resources"
            },
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "hello world",
            template: join(__dirname, "src/render/index.html")
        })
    ],
    optimization: {
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
}