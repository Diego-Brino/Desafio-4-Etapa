const path = require('path');
const dotenv = require('dotenv-webpack')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "index.bundle.js",
        publicPath: "/"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html', // faz o webpack chamar este arquivo na porta selecionada
        }),
        new dotenv({
            systemvars: true
        })
    ],
    devServer: {
        port: 8000,
        liveReload: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};