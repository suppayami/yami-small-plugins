const path = require('path');
const config = require('./webpack.base')
const webpack = require('webpack')

config.devtool = 'source-map'
config.output = {
    path: path.join(__dirname, "dist/"),
    filename: "YED_[name].js"
}

config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
    })
].concat(config.plugins)

module.exports = config