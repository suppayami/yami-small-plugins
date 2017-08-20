const webpack = require("webpack");
const IncludeHeaderPlugin = require("./webpack/plugins/include-header");
const Entry = require('./entry.config')

module.exports = {
    entry: Entry,
    externals: {
        'pixi.js': 'pixi.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components|demo\/)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.ts?$/,
                exclude: /(node_modules|bower_components|demo\/)/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    plugins: [
        new IncludeHeaderPlugin(),
        new webpack.ProvidePlugin({
            'pixi.js': 'pixi.js'
        })
    ],
    target: 'web'
};