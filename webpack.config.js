var path = require('path');

module.exports = {
    entry: ['./app/src/index.js'],
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './app',
    },
    watch: true,
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