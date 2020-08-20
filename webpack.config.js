const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    /* Archivo de entrada */
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist' ),
        filename: 'bundle.js',
        publicPath: '/'//con esto le estamos diciendo el directorio donde va a encontrar nuestros elementos
    },
    //Archivo de salida
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //extensiones aceptadas
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,

                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        'loader': 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback:true,
    },
    //el devServr es para que sirva con rutas el webpack,manejando una historia de las rutas
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
}