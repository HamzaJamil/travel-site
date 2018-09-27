var path = require('path');

module.exports = {
    entry: './app/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'scripts/bundle.js'
    },
    devServer: { /* load dev server */
        contentBase: './app',
        port: 3000
    },
    module: { /* this is the way of loading plugin */
        rules: [{
            test: /\m?.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devtool: 'inline-source-map'


}