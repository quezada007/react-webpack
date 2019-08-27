/* eslint-disable */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 9000,
        open: true,
        hot: true
    },
    devtool: 'source-map'
});