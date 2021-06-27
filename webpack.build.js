import webpack from 'webpack'
import { webpackProdConfig } from './webpack.config.prod'

const complier = webpack(webpackProdConfig)

complier.run((err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }

    const info = stats.toString({
        env: true,
        errors: true,
        builtAt: true,
        colors: true,
        timings: true
    });
    console.log(info)
    if (stats.hasErrors()) {
        console.error(info.errors);
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }
    complier.close(closeErr => {
        if (closeErr) {
            console.error(closeErr)
            return
        }
        console.log("build end")
    })
})