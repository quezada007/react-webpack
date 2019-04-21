const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Destination directory
const dist = 'dist'; 

const config = {
    /**
     *  Entry source js files
     */
    entry: {
        app: ['@babel/polyfill', './src/js/app.js']
    },
    /**
     * Output js files
     */
    output: {
        path: path.resolve(__dirname, dist + '/assets/'),
        filename: 'js/[name].js', // 'js/[name].[hash].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './' + dist
    },
    module: {
        rules: [
            /**
             *  ESLint will be used to lint all JavaScript.
             *  Please update .eslintrc.js for configuration. Site: http://eslint.org/
             */
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /(node_modules|vendors)/,
                loader: 'eslint-loader'
            },
            /**
             * Load Babel to compile ES6 to ES5
             * https://babeljs.io/
             */
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            /**
             * Compile SCSS files to CSS
             */
            {
                test: /\.scss$/,
                use: [
                    /**
                     * MiniCssExtractPlugin
                     * https://webpack.js.org/plugins/mini-css-extract-plugin/
                     */
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')()
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            /**
             * Load all the font files needed using the file loader
             */
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '../fonts/',
                    outputPath: 'fonts/'
                }
            },
            /**
             * Load all the background images used in the SCSS files
             */
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                    publicPath: '../bg-img/',
                    outputPath: 'bg-img/'   // Background images folder is bg-img
                }
            },
            /**
             * Compile pug files and place them in the dist folder
             * https: //pugjs.org/api/getting-started.html
             */
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-html-loader']
            }
        ]
    },
    plugins: [
        /**
         * The MiniCssExtractPlugin will compile all of the SCSS files
         * https://github.com/webpack-contrib/mini-css-extract-plugin
         */
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        /**
         * HtmlWebpackPlugin will compile Pug files into HTML
         * https://github.com/jantimon/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename: 'index.html',
            inject: true
        })
    ],
    optimization: {
        minimizer: [
            /**
             * Minimize JS files
             * https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
             */
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            /**
             * Minimize CSS files
             * https://github.com/NMFR/optimize-css-assets-webpack-plugin
             */
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: { 
                    sourceMap: true 
                }
            })
        ]
    }
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        /**
         * Create source maps for JS and the SCSS files
         */
        config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        // Production
    }

    return config;
};