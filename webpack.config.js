const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '/src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, '/dist'),
        clean: true,
    },
    // options
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        open: true,
        hot: true,
        liveReload: true
    },
    // loaders
    module: {
        rules: [
            //scss
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            // babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Greg\'s page',
            filename: "index.html",
            template: path.resolve(__dirname, 'src/tmp.html'),
            hash: true
        })
    ]
};