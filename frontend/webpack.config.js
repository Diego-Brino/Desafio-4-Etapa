const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // faz o webpack buildar em modo development
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html', // faz o webpack chamar este arquivo em localhost:8080
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    }
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