const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const minifyOptions = {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
};


module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry : {
        app: './src/app.js',
        // app: './src/js/home.js',
        // app: './src/js/about.js',
        // app: './src/js/ways.js',
        // app: './src/js/plans.js',
        // app: './src/js/events.js',
        // app: './src/js/media.js',
        // app: './src/js/contact.js',
    },

    devServer : {   
        port: 400
    },
    
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : isDevelopment ? 'js/[name].bundle.js' : 'js/[name].[hash].js'
    },

    module : {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader',
                    {
                        loader: 'sass-loader',
                        options:{
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'postcss-loader'
                ]
            },
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            }
        ]
    },

    resolve:{

        extensions: [".js", ".json", ".scss", ".pug"],
    },

    plugins : [
        new HtmlWebpackPlugin({
            template: './src/pages/app.pug', 
            minify : minifyOptions
        }),

        // new HtmlWebpackPlugin({
        //     template: './src/pages/home.html', 
        //     minify : minifyOptions
        // }),

        // new HtmlWebpackPlugin({
        //     template: './src/pages/about.html', 
        //     minify : minifyOptions
        // }),

        // new HtmlWebpackPlugin({
        //     template: './src/pages/ways.html', 
        //     minify : minifyOptions
        // }),

        // new HtmlWebpackPlugin({
        //     template: './src/pages/plans.html', 
        //     minify : minifyOptions
        // }),

        // new HtmlWebpackPlugin({
        //     template: './src/pages/events.html', 
        //     minify : minifyOptions
        // }),

        // new HtmlWebpackPlugin({
        //     template: './src/pages/media.html', 
        //     minify : minifyOptions
        // }),

        // new HtmlWebpackPlugin({
        //     template: './src/pages/contact.html', 
        //     minify : minifyOptions
        // }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].bundle.css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].bundle.css' : '[id].[hash].css'
          })
    ]
}