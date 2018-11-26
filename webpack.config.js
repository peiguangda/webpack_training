const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        frontend: './src/index.js',
        backend: './src/backend.js',
    },

    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'js/[name].js',
    },

    devServer: {
        contentBase: './build',
        port: 9000,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                use: [{
                    loader: 'babel-loader'
                }],
                test: /\.js?$/,
                exclude: /node_modules/
            },
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }]
    },

    watch: true,

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: "vendor",
                    chunks: "initial",
                    minSize: 1,
                    minChunks: 2 // >=2 file co code trung tren moi chunk thi cho vao vendor,
                }
            }
        },
        minimizer: [new UglifyJsPlugin()],
        minimize: true,
        usedExports: true
    },

    plugins: [

        new ExtractTextPlugin({
            filename: 'styles/app.bundle.css',
        }),

        new CopyWebpackPlugin([
            {from: 'src/images', to: 'images'}
        ]),

        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',//file giao dien chay khi go link
            chunks: ['frontend', 'vendor'], //file js trong build muon insert
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            filename: './index.html' //ten file se build ra trong thu muc build
        }),

        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            chunks: ['backend', 'vendor'],
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            filename: './backend.html'
        }),

        // new ManifestPlugin(
        //     {
        //         name: "manifes" | null,
        //         isInitial: true,
        //         isChunk: true,
        //         isAsset: true,
        //         isModuleAsset: true
        //     }
        // ),
        // new CleanWebpackPlugin(['build']),
        new UglifyJsPlugin(),
    ],

    mode: 'development'
};
