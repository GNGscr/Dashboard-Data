const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:  'development',
    devtool: "source-map",
    entry: './src/js/index.js',
    output:  {
        path: path.resolve(__dirname, 'dist'), // main output folder
        filename: 'js/app.bundle.js', // output file in js sub-folder
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/index.html' }
        ]),
        new MiniCssExtractPlugin({
            filename: "css/globals.css"
        }),
    ],
    module: {
        rules: [
            { test:/\.js$/, use: 'babel-loader', exclude: /node_moduls/ },
            {test:/\.(s*)css$/,
                 use:['style-loader','css-loader', 'sass-loader']}
            // { test: /\.scss$/,
            //     use: [
            //       MiniCssExtractPlugin.loader,
            //       {
            //         loader: "css-loader",
            //         options: {
            //           importLoaders:1
            //         }
            //       },
            //       'sass-loader'
            //     ]}
            // { test:/\.css/, use: ['style-loader', 'css-loader'] },
            // { test: /\.scss/,
            //     use: [
            //       MiniCssExtractPlugin.loader,
            //       {
            //         loader: "css-loader",
            //         options: {
            //           importLoaders:1
            //         }
            //       },
            //       'sass-loader'
            //     ]}
        
            // {
            //     test: /\.css/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         "css-loader"
            //     ]}
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
        stats: "minimal",
        open: true
    }
};

