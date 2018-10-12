var path = require('path');

module.exports = {
    entry: {
        index: './app/src/index.js',
        vendor: './app/src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'app/js'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: './app',
    },
    // watch: true,
    // mode: 'development',
    devtool: 'source-map',
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
                test: /\.s?css/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }


}