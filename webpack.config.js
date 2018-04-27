const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3030/',
        'webpack/hot/only-dev-server',
        './src/js/index'
    ],
    mode: 'development',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                plugins: ['react-hot-loader/babel'],
            },
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist',
        port: 3030,
        historyApiFallback: true,
        hot: true,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: {"^/api" : ""}
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Custom template',
            template: 'assets/templates/index.html'
        })
    ]
};
