const path = require('path');
const config = require('./webpack.base')
const webpack = require('webpack')

config.devtool = 'eval-source-map'
config.output = {
    path: path.join(__dirname, "demo/js/plugins"),
    filename: "YSP_[name].js"
}

module.exports = config