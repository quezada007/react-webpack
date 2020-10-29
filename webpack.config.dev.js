/* eslint-disable */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 8080,
        open: true,
        hot: true,
        historyApiFallback: true
    },
    devtool: 'source-map'
});