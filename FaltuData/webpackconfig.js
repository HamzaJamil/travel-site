var path = require('path');
// var autoprefixer = require('autoprefixer');
// var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: ['./app/src/index.js'],
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './app',
    },
    // watch: true,
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [{
                test: /\m?.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },

            plugins, [
                new MiniCssExtractPlugin({

                    filename: "[name].css",
                    chunkFilename: "[id].css"
                })
            ]
        ]
    }


}