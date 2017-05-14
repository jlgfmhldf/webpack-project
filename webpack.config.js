const path = require('path')
const webpack = require('webpack')
const StyleLintPlugin = require('stylelint-webpack-plugin') //TODO
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV || 'development'
const isDevelopment = NODE_ENV === 'development'
const { stringify } = JSON

module.exports = {
    entry: [
        './app/index.jsx',
        'webpack-hot-middleware/client',
        'babel-polyfill',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.min.js',
    },
    watch: isDevelopment,
    watchOptions: {
        aggregateTimeout: 100,
    },
    devtool: isDevelopment && 'cheap-inline-module-source-map',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: stringify(NODE_ENV),
        }),
        new StyleLintPlugin({
            files: ['./app/components/**/*.css'], //TODO,
            configFile: './.stylelintrc'
        }),
        new ExtractTextPlugin('style.css')
    ],
    devServer: {
        inline: true
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: [path.resolve(__dirname, 'app')],
            use: [
                'react-hot-loader',
                'babel-loader',
                'eslint-loader',
            ],
        }, {
            test: /\.css$/,
            use: isDevelopment ? [
                'style-loader',
                'css-loader',
                'postcss-loader',
            ] : ExtractTextPlugin.extract({
                use: [
                    'css-loader',
                    'postcss-loader',
                ]
            }),
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 1,
            },
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true,
            }
        })
    )
}
