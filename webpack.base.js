const webpack = require("webpack");
const IncludeHeaderPlugin = require("./webpack/plugins/include-header");
const Entry = require('./entry.config')

module.exports = {
    entry: Entry,
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components|demo\/)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new IncludeHeaderPlugin()
    ],
    target: 'web'
};